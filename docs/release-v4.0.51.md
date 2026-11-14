# v4.0.51 — flying-only scenery

Removed land animals from WebGL scenery, non-WebGL fallback, legacy scene overlays and optional welcome/progress pet overlays. Only flying birds and butterflies remain in scenery. Removed welcome pet entry points; independent pet games remain available. Existing player records and preferences are retained. English and Chinese About updated.

Validation: build and targeted scenery/navigation checks; live display verification after Pages deployment.

Added matching FHD daytime/nighttime variants for all ten heavenly palace scenes. Theme switches preserve the selected scene and change its artwork. Removed the previous dark-artwork/light-interface welcome text override because actual day/night backgrounds now follow the interface mode.

Validation: all ten palace scenery IDs are exercised through light → dark → light transitions, checking the selected scenery, matching image path, saved selection, and packaged asset existence.
