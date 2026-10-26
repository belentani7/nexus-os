# NEXUS OS — Local snapshot capability

The **Local Data Backup** application now captures actual persisted browser values, not placeholder sizes, fictional checksums or simulated restores. It currently supports exactly three **localStorage** keys verified in the code:

- `nexus_filesystem` — virtual filesystem state, including its serialized trash.
- `nexus:notepad:notes` — notes and note data.
- `nexus:settings:config` — local system settings.

An empty or unavailable key is not backed up; no success is reported. Snapshots are stored on the current device and must be **exported as JSON** for an independent copy. Import refuses unrecognized keys, invalid records and obsolete simulated backups; it never restores automatically. Restore requires explicit confirmation and preserves previous values if writing a new value fails. Refresh after restoration to reload application state.

**Not included:** IndexedDB blobs, unsaved state, other app caches, authentication tokens, browser profiles, files on the computer, other devices or cloud services. Browser private mode / storage clearing can erase local copies. Exported JSON is plaintext and may contain confidential notes; keep it private, avoid committing it to source control, and store securely.

Verification: `node --test tests/backup-tool.test.cjs`. This suite covers real-value capture, missing data rejection, invalid and legacy backups, confirmed restore, canceled restore and escaping hostile imported labels.
