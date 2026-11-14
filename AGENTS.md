# Mind Garden maintenance

After every app update, review the About documentation and update it wherever the change affects players. This is a standing user requirement.

- Keep English and Chinese documentation aligned with actual shipped behaviour.
- Review Latest improvements, first-time setup, user guide, FAQs and control/menu paths; remove stale descriptions of changed features.
- Describe only implemented behaviour. Keep proposed features and testing limits in developer documentation.
- The displayed About version comes from the release metadata generated from package.json; bump the release version when packaging/deploying.
- Check About as part of release validation. Record what was updated, or why no documentation change was applicable.
- Keep local qa-*.html/js harnesses and .openai preview configuration out of Cloudflare release packages.

## Standing UI alignment rule

- Centre-align all existing and new text inside cards, panels and dialogs, including headings, descriptions, labels, input values, buttons and card footers. Keep multi-line text centred too.
- Apply the same rule in English and Chinese, light and dark modes, mobile and desktop, and enlarged text settings. Do not introduce left-aligned card text without an explicit user request.
- Verify both text alignment and the position of text groups (balanced space around icons and action controls); avoid text that is centred only inside an off-centre column.
