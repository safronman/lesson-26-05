# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React + TypeScript project. Application code lives in `src/`, with the main entry point in `src/main.tsx` and the root component in `src/App.tsx`. Component styles are in `src/App.css`; global styles are in `src/index.css`.

Imported assets live in `src/assets/`, such as `hero.png` and SVG logos. Public assets served from the site root live in `public/`, including `favicon.svg` and `icons.svg`. Build and tooling configuration is kept at the repository root.

## Build, Test, and Development Commands

Use `pnpm` to match the existing `pnpm-lock.yaml`.

- `pnpm install` installs dependencies.
- `pnpm dev` starts the Vite development server with hot module replacement.
- `pnpm build` runs TypeScript project checks with `tsc -b` and creates a production build with Vite.
- `pnpm lint` runs ESLint across the repository.
- `pnpm preview` serves the production build locally for verification.

There is no test command configured yet.

## Coding Style & Naming Conventions

Write React components in TypeScript and use `.tsx` for files that render JSX. Use functional components and React hooks, following the ESLint rules in `eslint.config.js`.

Follow the style already used in `src/App.tsx`: two-space indentation, single quotes, no semicolons, PascalCase for components, camelCase for variables and functions, and descriptive CSS class or ID names.

## Testing Guidelines

Automated tests are not currently set up. When adding tests, add a script to `package.json` and document it here. Prefer colocated files such as `ComponentName.test.tsx` or a clear `src/__tests__/` directory if the suite grows.

Until a test runner is added, validate changes with:

- `pnpm lint`
- `pnpm build`
- manual browser checks via `pnpm dev`

## Commit & Pull Request Guidelines

The repository has minimal commit history and no established message convention. Use concise, imperative commit messages, for example `Add landing page assets` or `Fix hero layout spacing`.

Pull requests should include a short summary, the commands run to validate the change, and screenshots or screen recordings for visible UI changes. Link related issues when available, and keep unrelated formatting or refactors out of focused changes.

## Agent-Specific Instructions

Keep changes scoped to the requested task. Do not remove existing assets, generated files, or user work unless explicitly asked. Prefer current Vite, React, TypeScript, and ESLint patterns before adding tooling.
