npx eslint \<yourfile>.js

# eslint + vscode + prettier integration

https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857

vscode::settings.json:

```
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "autoFix": true,
    "language": "typescript"
  },
  {
    "autoFix": true,
    "language": "typescriptreact"
  }
],
"prettier.eslintIntegration": true,
```
