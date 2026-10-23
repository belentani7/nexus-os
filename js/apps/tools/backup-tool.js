'use strict';

/**
 * ═══════════════════════════════════════════════════════════════
 *  NEXUS OS — Backup Tool
 *  Export/import app data, backup/restore with full lifecycle
 * ═══════════════════════════════════════════════════════════════
 */
class NexusBackupTool {
  constructor(container) {
    this.container = container;
    this.element = null;
    this.logs = [];
    this.backups = [];
    this.selectedApps = new Set();
    this.progress = 0;
    this.isRunning = false;

    // Only datasets whose real persistence keys have been verified in NEXUS OS.
    // This tool does not back up IndexedDB or third-party application data.
    this.appData = {
      filesystem: { name: 'Virtual Filesystem', icon: '📁', key: 'nexus_filesystem' },
      notepad:    { name: 'Notepad', icon: '📝', key: 'nexus:notepad:notes' },
      settings:   { name: 'Settings', icon: '⚙', key: 'nexus:settings:config' }
    };
    this.maxExportBytes = 5 * 1024 * 1024;


      this._loadBackups();
  }

  render() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/tools/backup-tool.css';
    this.container.appendChild(link);
    this._linkEl = link;

    this.element = document.createElement('div');
    this.element.className = 'nexus-backup-tool';
    this.element.innerHTML = this._getHTML();
    this.container.appendChild(this.element);

    this._bindEvents();
    this._renderAppList();
    this._renderBackups();
    this._renderLog();
  }

  destroy() {
    this._saveBackups();
    if (this._linkEl) this._linkEl.remove();
    if (this.element) this.element.remove();
  }

  _getHTML() {
    return `
      <div class="bt-header">
        <h3>💾 LOCAL DATA BACKUP</h3>
        <span style="font-size:10px;color:#555">Actual localStorage snapshots · No IndexedDB/cloud backup</span>
      </div>
      <div class="bt-body">
        <div class="bt-section">
          <h4>Select Local Data to Back Up</h4>
          <div class="bt-app-list" id="bt-app-list"></div>
          <div style="margin-top:8px;display:flex;gap:6px">
            <button class="bt-btn" id="bt-select-all">Select All</button>
            <button class="bt-btn" id="bt-deselect">Deselect All</button>
          </div>
        </div>

        <div class="bt-section">
          <h4>Actions</h4>
          <div class="bt-actions">
            <button class="bt-btn bt-btn-primary" id="bt-backup">⬇ Create Real Snapshot</button>
            <button class="bt-btn bt-btn-primary" id="bt-export">📤 Export JSON</button>
            <button class="bt-btn bt-btn-warn" id="bt-import">📥 Import Backup</button>
            <button class="bt-btn bt-btn-warn" id="bt-restore">🔄 Restore One Snapshot</button>
          </div>
          <div class="bt-progress" id="bt-progress-wrap" style="display:none">
            <div class="bt-progress-bar" id="bt-progress-bar" style="width:0%"></div>
          </div>
        </div>

        <div class="bt-section">
          <h4>Backup History</h4>
          <div class="bt-backup-list" id="bt-backup-list"></div>
        </div>

        <div class="bt-section">
          <h4>Activity Log</h4>
          <div class="bt-log" id="bt-log"></div>
          <button class="bt-btn" id="bt-clear-log" style="margin-top:6px">Clear Log</button>
        </div>
      </div>
      <div class="bt-footer">
        <span id="bt-footer-size">Total backup size: 0 KB</span>
        <span id="bt-footer-count">0 backups stored</span>
      </div>
    `;
  }

  _bindEvents() {
    this.element.querySelector('#bt-select-all').addEventListener('click', () => {
      Object.keys(this.appData).forEach(k => this.selectedApps.add(k));
      this._renderAppList();
    });
    this.element.querySelector('#bt-deselect').addEventListener('click', () => {
      this.selectedApps.clear();
      this._renderAppList();
    });
    this.element.querySelector('#bt-backup').addEventListener('click', () => this._createBackup());
    this.element.querySelector('#bt-export').addEventListener('click', () => this._exportJSON());
    this.element.querySelector('#bt-import').addEventListener('click', () => this._importBackup());
    this.element.querySelector('#bt-restore').addEventListener('click', () => this._restoreSelected());
    this.element.querySelector('#bt-clear-log').addEventListener('click', () => {
      this.logs = [];
      this._renderLog();
    });

    this.element.querySelector('#bt-app-list').addEventListener('click', (e) => {
      const item = e.target.closest('.bt-app-item');
      if (!item) return;
      const key = item.dataset.key;
      if (this.selectedApps.has(key)) this.selectedApps.delete(key);
      else this.selectedApps.add(key);
      this._renderAppList();
    });
  }

  _renderAppList() {
    const el = this.element.querySelector('#bt-app-list');
    let totalSize = 0;
    el.innerHTML = Object.entries(this.appData).map(([key, app]) => {
      const sel = this.selectedApps.has(key);
      const raw = localStorage.getItem(app.key);
      const size = raw === null ? 0 : new Blob([raw]).size;
      if (sel) totalSize += size;
      return `
        <div class="bt-app-item ${sel ? 'selected' : ''}" data-key="${key}">
          <input type="checkbox" class="bt-app-check" ${sel ? 'checked' : ''}>
          <span>${app.icon}</span>
          <span>${app.name}</span>
          <span class="bt-app-size">${this._fmtSize(size)}</span>
        </div>
      `;
    }).join('');
    this.element.querySelector('#bt-footer-size').textContent = `Selected size: ${this._fmtSize(totalSize)}`;
  }

  _renderBackups() {
    const el = this.element.querySelector('#bt-backup-list');
    if (this.backups.length === 0) {
      el.innerHTML = '<div style="font-size:11px;color:#444;padding:8px">No backups yet. Select apps and create a backup.</div>';
      return;
    }
    el.innerHTML = this.backups.map((b, i) => `
      <div class="bt-backup-item">
        <input type="checkbox" class="bt-app-check bt-backup-check" data-idx="${i}">
        <span class="bt-backup-date">${this._escape(b.date)}</span>
        <span>${b.apps.length} datasets</span>
        <span style="color:#888">${b.apps.map(a => this.appData[a]?.icon || '?').join('')}</span>
        <span class="bt-backup-size">${this._fmtSize(b.size)}</span>
        <button class="bt-btn" data-action="delete" data-idx="${i}" style="padding:2px 8px;font-size:9px">✕</button>
      </div>
    `).join('');
    this.element.querySelector('#bt-footer-count').textContent = `${this.backups.length} backups stored`;

    el.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.backups.splice(parseInt(btn.dataset.idx), 1);
        this._saveBackups();
        this._renderBackups();
        this._log('Backup deleted', 'warn');
      });
    });
  }

  _renderLog() {
    const el = this.element.querySelector('#bt-log');
    el.innerHTML = this.logs.slice(-50).map(l =>
      `<div class="bt-log-entry"><span class="bt-log-time">${this._escape(l.time)}</span><span class="bt-log-${["info", "warn", "err", "ok"].includes(l.type) ? l.type : "info"}">${this._escape(l.msg)}</span></div>`
    ).join('');
    el.scrollTop = el.scrollHeight;
  }

  _log(msg, type = 'info') {
    const now = new Date();
    this.logs.push({
      time: now.toLocaleTimeString(),
      msg,
      type
    });
    this._renderLog();
  }

  /**
   * Check imported data BEFORE it can be displayed, stored or restored.
   * Reject v1 demo backups: those only contained invented metadata.
   */
  _isValidBackup(backup) {
    if (!backup || typeof backup !== 'object' || backup.version !== 2 ||
        !Array.isArray(backup.apps) || backup.apps.length === 0 ||
        backup.apps.length > Object.keys(this.appData).length ||
        typeof backup.date !== 'string' || backup.date.length > 80 ||
        !backup.data || typeof backup.data !== 'object') return false;

    const unique = new Set(backup.apps);
    if (unique.size !== backup.apps.length ||
        Object.keys(backup.data).length !== unique.size) return false;
    for (const app of unique) {
      const expected = Object.prototype.hasOwnProperty.call(this.appData, app)
        ? this.appData[app].key : null;
      const item = Object.prototype.hasOwnProperty.call(backup.data, app)
        ? backup.data[app] : null;
      if (!expected || !item || typeof item !== 'object' ||
          item.key !== expected || typeof item.value !== 'string') return false;
    }
    return new Blob([JSON.stringify(backup)]).size <= this.maxExportBytes;
  }

  _escape(value) {
    return String(value).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }

  async _createBackup() {
    if (this.isRunning) return false;
    const apps = [...this.selectedApps];
    if (!apps.length) {
      this._log('Select at least one dataset.', 'warn');
      return false;
    }
    this.isRunning = true;
    this._showProgress(true);
    try {
      const data = {};
      let total = 0;
      for (const app of apps) {
        const mapping = Object.prototype.hasOwnProperty.call(this.appData, app)
          ? this.appData[app] : null;
        if (!mapping) throw new Error('Unknown dataset: ' + app);
        const value = localStorage.getItem(mapping.key);
        if (value === null) throw new Error('No saved data found for ' + mapping.name);
        data[app] = { key: mapping.key, value };
        total += new Blob([value]).size;
      }
      const backup = {
        version: 2,
        id: Date.now(),
        date: new Date().toISOString(),
        apps,
        size: total,
        data
      };
      if (!this._isValidBackup(backup)) throw new Error('Snapshot too large or invalid');
      this.backups.unshift(backup);
      if (!this._saveBackups()) {
        this.backups.shift();
        throw new Error('Browser storage is full. Export an existing snapshot before retrying.');
      }
      this._renderBackups();
      this._setProgress(100);
      this._log('Captured actual browser data (' + this._fmtSize(total) +
        '). Export JSON to keep an independent copy.', 'ok');
      return true;
    } catch (err) {
      this._log('Snapshot failed: ' + err.message, 'err');
      return false;
    } finally {
      this.isRunning = false;
      this._showProgress(false);
    }
  }

  async _exportJSON() {
    if (!this.backups.length) {
      this._log('Nothing to export.', 'warn');
      return false;
    }
    const backupSet = this.backups.filter(b => this._isValidBackup(b));
    if (!backupSet.length) return false;
    const exportData = { nexus_backup: true, version: 2,
      exported: new Date().toISOString(), backups: backupSet };
    const json = JSON.stringify(exportData, null, 2);
    if (new Blob([json]).size > this.maxExportBytes) {
      this._log('Export is too large. Delete older local snapshots first.', 'warn');
      return false;
    }
    const url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'nexus-local-data-' + Date.now() + '.json';
      a.click();
      this._log('Downloaded ' + backupSet.length + ' real snapshot(s). Keep file private.', 'ok');
      return true;
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  async _importBackup() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.addEventListener('change', async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        if (file.size > this.maxExportBytes) throw new Error('File larger than 5 MB');
        const parsed = JSON.parse(await file.text());
        if (parsed?.nexus_backup !== true || parsed.version !== 2 ||
            !Array.isArray(parsed.backups) || parsed.backups.length > 20 ||
            !parsed.backups.every(b => this._isValidBackup(b))) {
          throw new Error('Invalid or legacy demo backup format');
        }
        const before = this.backups;
        this.backups = [...parsed.backups, ...before].slice(0, 20);
        if (!this._saveBackups()) {
          this.backups = before;
          throw new Error('Not enough local storage for imported snapshots');
        }
        this._renderBackups();
        this._log('Imported ' + parsed.backups.length + ' snapshot(s). Nothing restored yet.', 'ok');
      } catch (err) {
        this._log('Import refused: ' + err.message, 'err');
      }
    });
    input.click();
  }

  async _restoreSelected() {
    if (this.isRunning) return false;
    const checks = [...this.element.querySelectorAll('.bt-backup-check:checked')];
    if (checks.length !== 1) {
      this._log('Select exactly one snapshot for restore.', 'warn');
      return false;
    }
    const index = Number(checks[0].dataset.idx);
    const backup = this.backups[index];
    if (!this._isValidBackup(backup)) {
      this._log('Snapshot is invalid or belongs to the old simulated format.', 'err');
      return false;
    }
    if (typeof window.confirm !== 'function' || !window.confirm(
      'Overwrite the selected local data? Export your current snapshot first.')) return false;

    this.isRunning = true;
    const originals = new Map();
    try {
      for (const app of backup.apps) {
        const key = this.appData[app].key;
        originals.set(key, localStorage.getItem(key));
      }
      for (const app of backup.apps) {
        const { key, value } = backup.data[app];
        localStorage.setItem(key, value);
      }
      this._log('Local data restored. Refresh the page to reload it.', 'ok');
      return true;
    } catch (err) {
      let rollbackFailed = false;
      for (const [key, original] of originals) {
        try {
          if (original === null) localStorage.removeItem(key);
          else localStorage.setItem(key, original);
        } catch (_) { rollbackFailed = true; }
      }
      this._log('Restore failed: ' + err.message +
        (rollbackFailed ? ' Rollback incomplete; do not close this page.' : ' Previous data restored.'), 'err');
      return false;
    } finally {
      this.isRunning = false;
    }
  }


    _showProgress(show) {
    this.element.querySelector('#bt-progress-wrap').style.display = show ? 'block' : 'none';
    if (!show) this._setProgress(0);
  }

  _setProgress(pct) {
    this.progress = Math.min(100, pct);
    this.element.querySelector('#bt-progress-bar').style.width = `${this.progress}%`;
  }

  _loadBackups() {
    try {
      const raw = localStorage.getItem('nexus:backups');
      const parsed = raw ? JSON.parse(raw) : [];
      this.backups = Array.isArray(parsed)
        ? parsed.filter(b => this._isValidBackup(b)).slice(0, 20) : [];
    } catch (_) {
      this.backups = [];
    }
  }

  _saveBackups() {
    try {
      localStorage.setItem('nexus:backups', JSON.stringify(this.backups.slice(0, 20)));
      return true;
    } catch (_) {
      return false;
    }
  }


    _fmtSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  }

  // No fake hashes or artificial delays: a snapshot succeeds only when
  // actual data was captured and persisted.


  }

window.NexusBackupTool = NexusBackupTool;
