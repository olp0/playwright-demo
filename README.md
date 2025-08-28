# Playwright QA Starter (SauceDemo)

Minimal Playwright + GitHub Actions setup using a public demo site so CI passes out of the box.

## Prereqs
- Node.js 20+

## Install and run locally
```bash
npm ci || npm i
npx playwright install --with-deps
npm test
npm run report  # open HTML report after a run
```

## CI
Push to `main` and GitHub Actions will run tests in Chromium/Firefox/WebKit and upload the HTML report as an artifact.
