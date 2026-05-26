# @safronman/booster-ui

React UI components for Booster lessons.

## Install

```sh
pnpm add @safronman/booster-ui
```

The package expects React, React DOM, and Base UI to be installed in the consuming app:

```sh
pnpm add react react-dom @base-ui/react
```

## Usage

Import the package styles once in your app entry point:

```ts
import '@safronman/booster-ui/style.css'
```

Use components from the package entry point:

```tsx
import { Button, RadioGroup, RadioGroupItem } from '@safronman/booster-ui'

export function Example() {
  return (
    <>
      <Button variant="primary">Save</Button>

      <RadioGroup defaultValue="first" name="example">
        <RadioGroupItem value="first">First</RadioGroupItem>
        <RadioGroupItem value="second">Second</RadioGroupItem>
      </RadioGroup>
    </>
  )
}
```

## Development

```sh
pnpm install
pnpm lint
pnpm build
pnpm storybook
```

Before publishing, inspect the npm package contents:

```sh
pnpm pack --dry-run
```

## Release

Releases are published by GitHub Actions when a git tag like `v0.1.0` is pushed.
Add an npm automation token to the repository secrets as `NPM_TOKEN` before the first release.

Use semver:

- `patch` for bug fixes, for example `0.1.1`
- `minor` for backward-compatible components or APIs, for example `0.2.0`
- `major` for breaking changes, for example `1.0.0`

First release:

```sh
pnpm lint
pnpm build
git add .
git commit -m "Prepare npm package"
git tag v0.1.0
git push
git push --tags
```

Next releases:

```sh
pnpm lint
pnpm build
npm version patch
git push
git push --tags
```

Use `npm version minor` or `npm version major` when the release type requires it.

The publish workflow verifies that the pushed tag matches `package.json`, builds the package,
checks package contents with `pnpm pack --dry-run`, and publishes to npm with provenance.
