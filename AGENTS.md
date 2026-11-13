# Mind Garden maintenance

After every app update, review the About documentation and update it wherever the change affects players. This is a standing user requirement.

- Keep English and Chinese documentation aligned with actual shipped behaviour.
- Review Latest improvements, first-time setup, user guide, FAQs and control/menu paths; remove stale descriptions of changed features.
- Describe only implemented behaviour. Keep proposed features and testing limits in developer documentation.
- The displayed About version comes from the release metadata generated from package.json; bump the release version when packaging/deploying.
- Check About as part of release validation. Record what was updated, or why no documentation change was applicable.
- Keep local qa-*.html/js harnesses and .openai preview configuration out of Cloudflare release packages.
