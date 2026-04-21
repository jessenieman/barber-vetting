# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — installs `serve` (the only runtime dep you'll actually use locally; react/react-dom/@babel/standalone are listed to document CDN-pinned versions, not consumed from `node_modules`).
- `npm run dev` / `npm start` — serves the project at http://localhost:5173 via `serve`. A real HTTP server is **required**; Babel Standalone fetches `.jsx` files by URL, so `file://` won't work.
- No test suite, linter, or build step is configured.

## Architecture

This is a **zero-build static site**. Everything ships as plain HTML/CSS/JSX and is compiled in the browser by `@babel/standalone`.

### Three entry points, one shared config

- `index.html` — landing page, links to Apply/Review.
- `Apply.html` — candidate-facing form. Loads `data.js`, then `form-questions.jsx`, `form-thankyou.jsx`, `form-app.jsx` (order matters — see below), then renders `<ApplicationForm />`.
- `Review.html` — Bruce's PIN-gated review portal. Loads `data.js` and `portal-app.jsx`, then renders `<ReviewPortal />`.

React 18.3.1, ReactDOM 18.3.1, and @babel/standalone 7.29.0 are loaded from unpkg with SRI hashes. If versions change, the SRI hashes in the HTML must be regenerated.

### No modules — script order is the dependency graph

Nothing is bundled and there are no `import`/`export` statements anywhere. All components, helpers, and React hooks exist as **globals**. Every `.jsx` file starts with something like `const { useState } = React;` to pull hooks off the global `React`. Consequences:

- When adding a new component, its `<script type="text/babel" src="...">` tag must be placed **before** any script that consumes it in the HTML.
- Shared data lives on `window.CCB_SECTIONS` and `window.CCB_MOCK_CANDIDATES` (defined in `data.js`). Both the form and the portal read from these — treat `data.js` as the single source of truth for question config.

### Question config drives behavior in two places

`data.js` defines sections/questions with optional `qualifier: true`, `reliability: true`, and `negative: [...answers]` fields. The flag-computation logic is duplicated (intentionally, because there's no shared module system) in two places and **must stay in sync**:

- `handleSubmit` in `form-app.jsx` — computes flags on submission.
- `computeFlags(answers)` in `portal-app.jsx` — recomputes flags for display in the review portal.

If you change flag semantics, edit both.

### localStorage is the backend

There's no server. All state lives in `localStorage`:

- `ccb_draft` — in-progress form answers (auto-saved on change).
- `ccb_section` — last-viewed section index.
- `ccb_submission` — the current user's completed submission (drives the Thank You screen).
- `ccb_candidates` — the portal's inbox; submissions push into this array (mock "email delivery" from form → portal).
- `ccb_portal_unlocked` — `"yes"` once the PIN has been entered.

The portal seeds its list with `window.CCB_MOCK_CANDIDATES` prepended with any real submissions from `ccb_candidates`.

### PIN gate

`CORRECT_PIN = "3232"` is hardcoded at the top of `portal-app.jsx`. This is a demo gate — not a real auth boundary. Everything in localStorage is readable by anyone with devtools.

## Conventions worth preserving

- The brand voice in prompts, placeholders, and UI copy is deliberate (direct, a little terse, Bruce's voice). Don't soften it in passing edits.
- CSS is split per-surface (`styles.css` shared, `form.css`, `portal.css`, `thankyou.css`) and uses CSS custom properties defined in `styles.css` (`--ink`, `--sage`, `--rule`, etc.). Reuse the tokens rather than inventing new colors.
