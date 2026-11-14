# v4.0.50 — correct paragraph alignment

Corrects the interpretation of the user reference: headings and disclosure headers remain centred; explanatory paragraphs and numbered/bulleted instructions are left-aligned. Removes blanket paragraph centring and resets inherited text-align-last so the final line is also left-aligned. Existing control/answer layouts are retained.

Updated AGENTS.md to prevent recurrence, the English/Chinese About description, and layout checks to expect left-aligned About paragraphs. Also extends ranking-only duplicate suppression to older same-name snapshots whose complete activity history, multiplayer history and best scores are covered by a more complete profile. Neither stored record is removed or merged. Divergent histories remain separate. No database migration.

Validation results are recorded in the PR. Production publication requires approval for this new correction.

Scenery label: increased from 0.95rem to 1.25rem, bold, with opaque dark-green/light-cream surfaces so photo brightness cannot reduce text contrast. Wraps within the scene and follows text-size controls. About FAQ updated in English and Chinese.

Added five FHD heavenly oriental palace backgrounds, shared between light and dark modes. Existing paired garden imagery retained. Scenery label padding reduced to 4px vertical / 12px horizontal, retaining bold 1.25rem type and contrast surfaces.
