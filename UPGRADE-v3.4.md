# Mind Garden v3.4 — distinct acoustic arrangements

Chamber Garden and Harp & Woodwinds no longer share a chord sequence or melody. Both now use recorded acoustic instrument samples, locally bundled, rather than the previous oscillator-only instrument voices.

- **Chamber Garden:** original D-major score, 58 BPM in 4/4; expressive piano theme and broken chords, overlapping violin lines, independent cello bass and occasional clarinet harmony. Soft room reverberation and varied note velocities add depth without percussion or abrupt accents.
- **Harp & Woodwinds:** separate F-major score, 72 BPM in 3/4; flowing harp patterns, flute melody and clarinet answers. No piano, violin or cello layer, keeping it clearly lighter than Chamber Garden.
- The eight-phrase chamber progression and six-phrase harp progression have different contours and phrase lengths. Humanized note levels vary across repetitions; they remain coherent compositions rather than random notes.
- Acoustic samples load only when needed and are cached in memory. The standalone preview embeds them. Nature layers, personal playlists and separate volume controls remain available.
- WAV exports now use the same sampled arrangement and include sample attribution in RIFF INFO metadata. Credits also appear in the music panel and `public/audio/CREDITS.txt`.

The music is original, programmatically performed using sampled instruments, not a live orchestra recording or a recording of a commercial song. Use the existing personal music option for specific recordings.

## Validation

Actual browser OfflineAudioContext rendered 24 seconds of each score from the same seed, without nature sounds. Chamber RMS 0.0387 / peak 0.2344; Harp RMS 0.0508 / peak 0.2326 before user volume controls. Neither clipped. Waveform correlation was -0.0118, and phrase counts differed (3 vs 5), confirming distinct generated audio. Browser UI checks confirmed Chamber playback, switching to Harp, Pause, and completion of a 60-second WAV export.

Existing bouquet, games and eight-player backend are unchanged. No new database migration is required from V3.0 onward. Cache is `mind-garden-v34`; output directory stays `public` with D1 binding `DB`. The private preview does not enable multiplayer.

## Sample provenance

Collection: Nicholaus P. Brosowsky, https://github.com/nbrosowsky/tonejs-instruments — samples licensed CC BY 3.0. Upstream attributes piano/violin/harp/flute to VSCO 2 and cello to flcellogrl on Freesound. Full source notes, processing changes and attribution are in `public/audio`. Samples were converted to mono 32 kHz/64 kbps MP3 and capped at nine seconds with a tail fade. The selected samples total approximately 1.9 MB.
