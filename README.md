# Teleport components

Collection of React portal based components

TODO's:
- add linter: [doc](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md)
- Add Readme
- Add Dropdown component
- Add Tooltip component
- Add Popover component
- Add Modal component

```
lerna add react packages/portal --peer
```
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
