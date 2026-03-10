## Copilot Instructions for this repository

Repository-specific rules for AI/code-assistant edits.

- **Translations parity:** When changing any user-visible German text (`de`) in the codebase (e.g. in `src/i18n.js`, JSON/YAML translation files, or hard-coded copy in components), always update the corresponding English translation (`en`) in parallel.
  - If you add or change the key `about.intro1` (or any other `de` translation), add or update the same key under `en.translation` with an appropriate English translation.
  - Prefer using the existing `i18n` resource structure (`src/i18n.js`). If you add new translation files, keep the same key paths in both languages.
  - If a text change cannot be translated immediately, add a clear TODO comment in the `en` translation value: `"TODO: translate from DE"` and create a short issue or TODO entry so the missing translation is resolved before publishing.

- **Where to edit translations:**
  - Primary: `src/i18n.js` (project uses inline resources). Edit both `de` and `en` sections.
  - If a new translation file is introduced (e.g. `locales/de.json`), add the counterpart `locales/en.json` and keep keys synchronized.

- **Commit message guideline:** When committing translation changes, include both language keys in the commit and reference the changed page, e.g. `about: update intro1 (DE+EN)`.

- **Review checklist for text changes:**
  1. Changed `de` text present? ✅
 2. Matching `en` text added/updated? ✅
 3. `t('...')` usage preserved in components (no hard-coded strings left)? ✅
 4. If unsure, mark `en` value `"TODO: translate from DE"` and create an issue. ✅

These rules ensure the site remains bilingual and consistent when German copy is edited.

- **Dist / Deploy:** Before uploading the site to IONOS (or any server), always refresh the `dist/` build output and include the updated `dist/` contents in the upload.
  - Typical workflow: run the project's build script (e.g. `npm run build` or `vite build`) and then any project-specific prepare script (e.g. `scripts/prepare-dist.sh`) that copies assets into `dist/`.
  - Verify `dist/` contains the updated HTML, JS, CSS and optimized assets before deploying.
  - If you publish `dist/` to the repository or a deployment artifact, commit only the built files and do not include secret or environment files from `secrets/`.
  - Add a short commit message: `build(dist): refresh for ionos upload` so it's clear the deploy bundle was updated.

