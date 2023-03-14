module.exports = {
  ignoreFiles: [
    "dist/**/*"
  ],
  extends: [
    "stylelint-config-standard-scss"
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      // customSyntax: "postcss-scss",
      rules: {
        /**
         * Stylelint recommended rules
         */
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": null,
        "font-family-no-missing-generic-family-keyword": [true, {
          "ignoreFontFamilies": ["/regex/", /regex/, "string"]
        }],
        "font-family-name-quotes": "always-where-recommended",
        "max-nesting-depth": 3, // 最大巢狀數，預設值為 1
        
        "no-descending-specificity": null, // 使用 Sass/Scss 請把這個規則關掉。
        // Ref: https://github.com/stylelint/stylelint/issues/4271
        "selector-class-pattern": null, // class 名稱的規則，以 regex 來客製化
        "selector-max-id": 1, // 一個選擇器中，最多能有幾個 ID

        /**
         * stylelint-scss
         */
        "scss/at-rule-no-unknown": true,
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/dollar-variable-pattern": null,
        "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)(-[a-zA-Z0-9]+)*$",
        "scss/selector-no-redundant-nesting-selector": true,

        /* 以下規則在 Stylelint v15.x 已棄用 */
        // "declaration-block-trailing-semicolon": "always", // 屬性結尾必須有分號
        // "declaration-block-semicolon-newline-after": "always", // 分號之後必須換行/分號之後不能有空白
        // "indentation": 2, // 縮排
        // "no-extra-semicolons": true, // 禁止重複/多餘的分號
      }
    }
  ],
}