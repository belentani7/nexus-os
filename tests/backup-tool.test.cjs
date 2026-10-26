const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');

const backupJS = readFileSync(join(__dirname, '../js/apps/tools/backup-tool.js'), 'utf8');

function setup(initial = {}) {
  const data = new Map(Object.entries(initial));
  let failOnce = null;
  const storage = {
    getItem: k => data.has(k) ? data.get(k) : null,
    setItem(k, v) {
      if (k === failOnce) { failOnce = null; throw Error('Quota exceeded'); }
      data.set(k, String(v));
    },
    removeItem: k => data.delete(k),
    failNextSet(k) { failOnce = k; }
  };
  const ctx = {
    window: { confirm: () => true },
    localStorage: storage,
    Blob, Date, Map, Set, Object, JSON,
    URL: { createObjectURL: () => 'blob:test', revokeObjectURL: () => {} },
    document: { createElement: () => ({ click() {} }) }
  };
  vm.runInNewContext(backupJS, ctx, { filename: 'backup-tool.js' });
  const tool = new ctx.window.NexusBackupTool({});
  tool._logs = [];
  tool._log = (m, type) => tool._logs.push({ message: m, type });
  tool._showProgress = () => {};
  tool._setProgress = () => {};
  tool._renderBackups = () => {};
  tool.element = { querySelectorAll: () => [{ dataset: { idx: '0' } }] };
  return { tool, storage, data, ctx };
}

test('real localStorage values are captured and persisted, never invented', async () => {
  const { tool, storage } = setup({
    nexus_filesystem: '{"files":[{"name":"real.txt"}]}',
    'nexus:notepad:notes': '[{"body":"hello"}]'
  });
  tool.selectedApps.add('filesystem');
  tool.selectedApps.add('notepad');
  assert.equal(await tool._createBackup(), true);
  assert.equal(tool.backups.length, 1);
  const one = tool.backups[0];
  assert.equal(one.version, 2);
  assert.equal(one.data.filesystem.value, '{"files":[{"name":"real.txt"}]}');
  assert.equal(one.data.notepad.value, '[{"body":"hello"}]');
  assert.equal(JSON.parse(storage.getItem('nexus:backups'))[0].data.notepad.value, one.data.notepad.value);
});

test('missing selected dataset fails closed without a fictional backup', async () => {
  const { tool } = setup({});
  tool.selectedApps.add('notepad');
  assert.equal(await tool._createBackup(), false);
  assert.equal(tool.backups.length, 0);
});

test('imported demo v1 backup and incorrect keys cannot be restored', () => {
  const { tool } = setup();
  assert.equal(tool._isValidBackup({ version: 1, apps: ['notepad'], date: 'today', data: {} }), false);
  assert.equal(tool._isValidBackup({
    version: 2, apps: ['notepad'], date: 'today',
    data: { notepad: { key: 'nexus:settings:config', value: 'wrong data' } }
  }), false);
});

test('restore is confirmed and updates exact original key', async () => {
  const { tool, storage } = setup({ 'nexus:settings:config': '{"theme":"old"}' });
  tool.selectedApps.add('settings');
  assert.equal(await tool._createBackup(), true);
  storage.setItem('nexus:settings:config', '{"theme":"new"}');
  tool._renderBackups = () => {};
  tool.element = { querySelectorAll: () => [{ dataset: { idx: '0' } }] };
  assert.equal(await tool._restoreSelected(), true);
  assert.equal(storage.getItem('nexus:settings:config'), '{"theme":"old"}');
});

test('restore declines without confirmation and preserves newer data', async () => {
  const { tool, storage, ctx } = setup({ 'nexus:settings:config': '{"theme":"old"}' });
  tool.selectedApps.add('settings');
  assert.equal(await tool._createBackup(), true);
  storage.setItem('nexus:settings:config', '{"theme":"new"}');
  ctx.window.confirm = () => false;
  assert.equal(await tool._restoreSelected(), false);
  assert.equal(storage.getItem('nexus:settings:config'), '{"theme":"new"}');
});

test('escaping imported display labels prevents HTML injection', () => {
  const { tool } = setup();
  assert.equal(tool._escape('<img src=x onerror=alert(1)>'),
    '&lt;img src=x onerror=alert(1)&gt;');
});
