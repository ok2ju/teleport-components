# Teleport components

Collection of React portal based components

This is raw doc (mostly garbage).
## TODO's:
- ~~add linter: [doc](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)~~
- Add Readme
- Add Dropdown component
- Add Tooltip component
- Add Popover component
- Add Modal component
- Automatically update `gh-pages`

## Commands
Add dependency to specific package:
```
lerna add react packages/portal --peer
```

Add dependency to root of monorepo:
```
yarn add prettier --dev -W
```

## Linting
typescript-lint (useful links):
- https://github.com/typescript-eslint/typescript-eslint/issues/111
- https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md

To setup your editor to automatically run ESLint's automatic fix command (i.e. eslint --fix) whenever a file is saved set following option in `settings.json` in VSCode:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

Project uses `husky` and `lint-staged` to lint code before commit

## Docs

Docs have written using `nextjs`.

We use aliases to `packages` using `tsconfig.json` `paths` property:
```json
// docs/tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "../",
    "paths": {
      "@teleport/*": [
        "packages/*/src"
      ]
    }
  },
}
```

It allows us to write imports in following format:
```javascript
import { usePortal } from '@teleport/portal'
```
