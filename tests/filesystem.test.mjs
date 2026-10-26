import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../js/os/filesystem.js", import.meta.url), "utf8");
function createFileSystem(options = {}) {
  const values = new Map(options.raw === undefined ? [] : [['nexus_filesystem', options.raw]]);
  const localStorage = {
    setItem: (key,value) => { if (options.blockWrite) throw new Error('Storage denied'); values.set(key, value); },
    getItem: (key) => { if (options.blockRead) throw new Error('Storage denied'); return values.get(key) ?? null; },
  };
  const window = {};
  runInNewContext(source, { window, localStorage, Blob, console: { log(){}, warn(){} } });
  return { fs: window.NexusFS, values };
}
test("rename collision refuses to erase an existing sibling", () => {
  const {fs,values} = createFileSystem();
  const initialCount=fs.resolve("/Documents").childCount;
  const a=fs.create("/Documents","first.txt","text","A");
  const b=fs.create("/Documents","second.txt","text","B");
  assert.ok(a&&b);
  assert.throws(()=>a.rename("second.txt"),/already exists/);
  assert.equal(fs.resolve("/Documents/first.txt").content,"A");
  assert.equal(fs.resolve("/Documents/second.txt").content,"B");
  assert.equal(fs.resolve("/Documents").childCount,initialCount+2);
  assert.equal(values.has("nexus_filesystem"),true);
});
test("move refuses destination collisions without orphaning source", () => {
  const {fs}=createFileSystem();
  const source=fs.create("/Documents","memo.txt","text","Original text");
  const dest=fs.create("/Desktop","memo.txt","text","Protected destination");
  assert.equal(fs.move("/Documents/memo.txt","/Desktop/memo.txt"),false);
  assert.equal(fs.resolve("/Documents/memo.txt"),source);
  assert.equal(fs.resolve("/Desktop/memo.txt"),dest);
  assert.equal(source.content,"Original text");
  assert.equal(dest.content,"Protected destination");
  assert.equal(fs.move("/Documents/memo.txt","/Music/memo.txt"),true);
  assert.equal(fs.resolve("/Music/memo.txt"),source);
  assert.equal(fs.resolve("/Documents/memo.txt"),null);
});
test("rejects slash segments, traversal names and duplicate copy targets", () => {
  const {fs}=createFileSystem();
  assert.equal(fs.create("/Documents","../private","text","bad"),null);
  assert.equal(fs.create("/Documents","A/B","text","bad"),null);
  assert.equal(fs.create("/Documents","..","text","bad"),null);
  fs.create("/Documents","source.txt","text","S");
  fs.create("/Desktop","copy.txt","text","D");
  assert.equal(fs.copy("/Documents/source.txt","/Desktop","copy.txt"),null);
  assert.equal(fs.resolve("/Desktop/copy.txt").content,"D");
  assert.equal(fs.copy("/Documents/source.txt","/Desktop","../outside"),null);
});
test("successful rename preserves document content and its new path", () => {
  const {fs}=createFileSystem();
  const src=fs.create("/Documents","project.txt","text","Working file");
  src.rename("project-notes-2026.txt");
  assert.equal(fs.resolve("/Documents/project-notes-2026.txt").content,"Working file");
  assert.equal(fs.resolve("/Documents/project.txt"),null);
  assert.equal(fs.move("/Documents/project-notes-2026.txt","/Documents/project-notes-2026.txt"),true);
});

test("corrupt saved JSON is preserved byte-for-byte, even after writes", () => {
  const raw = '{"root":';
  const { fs, values } = createFileSystem({ raw });
  assert.equal(fs._storageReadOnly, true);
  assert.ok(fs.resolve('/Desktop/welcome.txt'));
  assert.equal(fs.write('/Desktop/welcome.txt', 'temporary only'), true);
  assert.equal(values.get('nexus_filesystem'), raw);
});
test("invalid saved root is never replaced by default sample files", () => {
  const raw = JSON.stringify({ root: { name: '', type: 'text', children: {} }, trash: [] });
  const { fs, values } = createFileSystem({ raw });
  assert.equal(fs._storageReadOnly, true);
  assert.equal(values.get('nexus_filesystem'), raw);
});
test("blocked browser storage boots temporary read-only persistence without crashing", () => {
  const { fs } = createFileSystem({ blockRead: true, blockWrite: true });
  assert.equal(fs._storageReadOnly, true);
  assert.ok(fs.resolve('/Documents/notes.txt'));
});
test("rename persists across a new filesystem session", () => {
  const first = createFileSystem();
  const file = first.fs.create('/Documents', 'persist.txt', 'text', 'Important');
  file.rename('persist-renamed.txt');
  const second = createFileSystem({ raw: first.values.get('nexus_filesystem') });
  assert.equal(second.fs.resolve('/Documents/persist-renamed.txt').content, 'Important');
  assert.equal(second.fs.resolve('/Documents/persist.txt'), null);
});
