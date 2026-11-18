# Mind Garden v6.2.1

Release date: 18 November 2026. Fixes from the v6.2.0 review. Decisions D-05 and D-06 (APPROVAL-RECORD.md); PRD revision 1.4.

## What changed

- **Text alignment (D-05, VIS-02).** A paragraph stays one flowing block. It is centred while it fits on one line and turns left-aligned as soon as it wraps. Only in-game answer feedback (`#mmsg`, `[data-feedback]`) keeps one sentence per line. Big single values such as the group code stay centred.
- **No sideways scrollbar in the group waiting room.** The join-sound checkbox was inheriting full input width.
- **Stable game list (D-06, LAY-05).** The Choose game panel keeps its height while you search, including when nothing matches.
- **Chinese text in the bundle.** Kept from v6.2.0: the release compactor reads UTF-8, so the 5 corrupted characters in live v6.0.0 are gone.
- **About.** Version 6.2.1 entry in English and Chinese.

## Checks

- Waiting room: content width equals the visible width at 320, 390, 844 and 1366 px; no sentence splitting.
- Choose game height: unchanged before and after an empty search (548/548 at 320×568, 644/644 at 390×664, 370/370 at 844×390, 748/748 at 1366×768).
- No page errors in any render.
- 41 regression suites compared with v6.2.0: 32 pass in both. `grammar.test.cjs` failed during development because the `MindGardenFeedback` export was dropped; it is restored and passes. The 8 suites that fail in v6.2.0 still fail, unchanged.

## Evidence

| File | Screen |
|---|---|
| phone-390-en-lobby.jpg | Waiting room, wrapped invite text left-aligned |
| phone-320-en-search-empty.jpg | Choose game, empty search, same height |
| landscape-844-zh-lobby.jpg | Waiting room, Chinese, landscape |
| desktop-1366-zh-search-empty.jpg | Choose game, empty search, desktop |
