# v5.0.4

- Slim 56px minimum navigation with 48px targets; height grows with text.
- Catalogue has one heading with a smaller, live filtered count; removed redundant subtitles.
- Back returns one menu level without confirmation. Any action discarding unfinished gameplay requires confirmation; Change level warns before restarting.
- Full Bloom offers Grow another. The completed flower selection is saved per player in My Garden; the next flower type starts at zero. Scores/history remain unchanged. Existing older garden-cycle counts are retained, but unknown historical flower arrangements are not invented.
- Retired Blossom, Meadow and Pond scenery and the legacy landscape asset are removed. References in puzzle artwork and initial CSS use newer scenery. Retired preferences migrate to Japanese Cherry Garden; newer selections and personal photos remain.
- About updated in English and Chinese. No database migration or configuration change.

Validation: build/syntax, dynamic count and bouquet preservation tests, bilingual menu back-stack tests, release cache and About checks. Real-device testing and the earlier full-app audit remain outstanding.

## Additional consistency review
My Games shares catalogue card markup and artwork. Removed repeated preparation descriptions and redundant Play/settings labels. Info controls have one visible ring and an invisible touch target; focus remains visible. Garden headings and status labels centred. English/Chinese preparation checks cover all 56 games. Deployment authorised by the user on 16 November 2026, excluding all proposed new scenery artwork.

Play menu follows the supplied two-column reference, retaining full-width disclosures. At large text sizes the grid falls back to a single column. New architectural sunset artwork is preview-only and has not replaced app assets.

Release validation: build and syntax checks, v504 layout and consistency, v5 flow, bilingual menu navigation, About, cache, cleanup, paired scenery and player preference tests passed. Legacy review-ui and navbar-overflow suites still assert superseded welcome/menu wording and order; they are not recorded as passing. No new generated scenery or development screenshot is included in this release.
