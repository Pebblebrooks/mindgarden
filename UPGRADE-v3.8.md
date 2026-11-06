# V3.8 — personal player settings and welcome video

Deploy public/ and functions/ as before. No SQL migration is required.

- An Animation On/Off button sits beside Nature sounds. It stops decorative animals, insects and leaves. Video playback uses independent controls. Reduced-motion system preferences remain respected.
- Preferences are stored by stable local profile ID: appearance, light/dark backgrounds, selected welcome media, music mix and volume, home nature, motion, language and accessibility/game settings. Rename keeps the same ID. Existing device preferences migrate to the currently selected player; other/new players start with defaults. This is local persistence, not cross-device account synchronization.
- Welcome photos are now scoped to each profile in IndexedDB. Existing welcome photos migrate to the original active player. Clearing site data deletes personal media.
- Add up to three local MP4/WebM videos per player in Settings > Welcome videos (100 MB each). Videos are stored locally, start paused/muted, and provide native play/pause, seek, volume, fullscreen and browser playback controls. Browser codec support applies. Videos pause when leaving the homepage, switching player or hiding the tab. Audible video pauses nature/music to avoid overlapping sound.
- Left/right arrows cycle built-in scenes, the current appearance's saved photo, and the player's videos. Selection persists independently for light/dark mode. A caption identifies the media and position.
- Selection cards now have frosted translucent surfaces, bevel highlights, layered shadows and restrained hover lift. Off/reduced-motion disables hover motion.

Music preferences are saved per player; personally selected music files still need to be reselected after reload or profile switch. Built-in music selections and volumes restore automatically; music starts only on user action. Uploaded welcome photos/videos do persist in browser storage.

Validation: syntax checks; existing eight-player UI/API and garden tests; profile isolation, switching and rename tests; browser video upload/playback, native controls, arrows, animation toggle, profile media isolation and reload restoration.

## V3.8 footer and animation fix
Centered progress footer text and controls; compact raised flower button. Animation Off now hides decorative wildlife, clouds, and leaves, including GIF fallbacks. No database migration required.
