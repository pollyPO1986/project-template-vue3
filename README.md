# project-template-vue3
整理一份自己常用的 Vue3 開發設定的 Template。

## 專案使用的技術
Vue Cli + Vue3 + Scss + Pug + Docker

## 打包工具與 linter 設定
Webpack + eslint + stylelint

## package.json linter scripts 說明
#### JavaScript 規則檢查
```
docker compose exec web yarn lint
```
#### Scss 規則檢查
`@use` 類型可以到這裡查詢 [Sass文件](https://github.com/sass/sass/blob/main/accepted/module-system.md#built-in-modules-1)
```
docker compose exec web yarn lint:style
```
如果不想下指令，可以使用 VSCode 的外掛：
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## 純 Docker 設定檔（無安裝任何東西）
切到 pure-docker-template 分支進行 clone。
