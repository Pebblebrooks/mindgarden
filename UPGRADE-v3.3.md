# Mind Garden v3.3 — bouquets and soundscapes

The progress flowers now form a growing bouquet in the progress panel, beside the details on desktop and above them on phones. The hero has no overlaid flower bed, soil or floating planter. At low progress the bouquet starts with greenery; existing twelve-slot growth stages and flower choices add buds and blooms. Its placement no longer depends on how the hero artwork crops.

Gentle motion keeps three animal actors and six flying objects visible on WebGL-capable devices; Standard retains the full ten flying objects. Quieter timing and spacing are preferable to increasing the count. The existing no-WebGL fallback shows the three animated animal GIFs.

## Music & nature

Open the music-note button in the navigation bar.

- Chamber garden: original polyphonic synthesized string-style chords, bass, a woodwind-style melody and a harp counter-line.
- Harp & woodwinds: overlapping harmony, bass and a changing harp-led melody.
- Nature layers: Ocean & gulls, Garden & birds, Soft wind, or none. Wave/wind envelopes, pan, durations and gaps vary. Gulls and garden birds leave quiet gaps; an optional subdued foghorn occurs at irregular long intervals in Ocean mode.
- Independent overall, music and nature sliders. Play/Pause, with no automatic playback on page load. Audio suspends while the page is hidden.
- Add one or more personal audio files. Browser-supported MP3, WAV, M4A, OGG and FLAC files play locally with a repeating playlist and optional nature layer. Files are never uploaded or included in exported mixes. They must be chosen again after a reload; remove them with Clear playlist.
- Download a newly rendered 60-second stereo WAV of the selected built-in music/nature mix at the chosen levels, with fade-in/out. Personal music is excluded. Download works without microphone access or a server.

These are synthesized, original compositions and procedural nature sounds, not recorded orchestral performances or field recordings. For a recorded orchestra or specific recording, use the personal music option.

## Validation and deployment

Syntax and eight-player SQL/UI regression checks passed. Cloud-browser checks verified the empty and full-bloom bouquet, phone/tablet widths, audio Play/Pause, ocean selection/foghorn, WAV download completion and a local WAV playlist selection/playback. The browser lacks WebGL, so its visual checks used the bundled GIF fallback. No new 3D-renderer changes beyond Gentle visibility filtering were required.

Cloudflare output remains `public`, D1 binding `DB`. No database migration is needed from V3.0 onward. Cache: `mind-garden-v33`. The private hosted preview uses the same standalone preview with multiplayer disabled; deploy the full package for multiplayer.

Build preview: `python3 scripts/build-preview.py /path/to/preview.html`.
Checks: Node.js 24+, `npm install`, `npm run check`, `npm test`. Existing browser regression suite remains in `tests/garden-ui.test.cjs` for a Chromium environment with WebGL support.
