# V3.7 — personal photos, home ambience and game garden

Deploy public/ and functions/ as before. No SQL migration is required.

Settings > Your own welcome photos accepts one JPG/PNG/WebP per light/dark mode (25 MB input limit), resizes to 1600px, strips embedded metadata through canvas re-encoding, and stores JPEG blobs in IndexedDB on the current browser/device. Photos are never sent to a server. Use a built-in scene to switch away; Remove photo deletes the stored copy. Browser site-data clearing removes personal pictures.

Homepage nature is enabled by default, starts after the first click or keyboard interaction, and has a persistent visible on/off toggle. Daytime mixes birds and rustling wind with occasional synthesized hen/cat/dog calls; rooster calls are limited to 05:00–08:59 on the device clock. Sunset mode adds crickets, frog calls and sparse owl hoots. These effects are procedural/synthesized rather than wildlife recordings. Random intervals leave long quiet gaps. The mix pauses outside the homepage, in background tabs, and when music/personal audio is playing; returns on homepage when enabled. Uploaded photos use the current appearance mode to choose day/sunset audio. A small articulated 3D hen walks and pauses to peck when WebGL is available.

Desktop More is now visible when expanded, supports outside-click and Escape dismissal, and retains tablet/mobile behavior. All Games uses large leaf imprints, softly drifting leaves, quieter garden cards and unified day/dark colors. Motion Off and reduced-motion disable decorative movement. Existing floating leaves also overlay personal photos.

Validation: syntax and existing eight-player/personal garden suites, browser desktop menu and game search, local photo upload and reload persistence, nature toggle and homepage lifecycle, offline rendering of day/sunset mixes.
