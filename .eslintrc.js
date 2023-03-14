module.exports = {
  /**
   * 此項是用來告訴eslint找當前配置檔案不往父級查詢
   */
  root: true,

  /**
   * 此項指定環境的全域性變數
   * Ref: https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
   */
  env: {
    browser: true,
    es2021: true,
    es2020: true,
    es2017: true,
    es6: true,
    jquery: true,
    node: true,
    commonjs: true
  },

  /**
   * 此項是用來配置標準的js風格。 目前採用 JavaScript Standard
   * 'plugin:vue/recommended' Vue2 coding style
   * 'plugin:vue/vue3-recommended' Vue3
   */
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  /**
   * 定義解析選項
   * parser: '@babel/eslint-parser',
   * ecmaVersion: '12', < = 需升級到 v7.30.x up
   * ecmaVersion: 'latest', 支援 ECMAScript 最新版本
   * ecmaFeatures 定義希望使用語言中哪些額外的功能
   */
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: true,
    ecmaFeatures: {
      jsx: true
    }
  },

  /**
   * 外掛
   * 在 ESLint 中可以使用第三方的套件
   * 使用這些套件前需要先透過 npm/yarn 進行安裝。
   * 在設定時，每個套件名稱前面的 `eslint-plugin-` 可以省略不寫
   */
  plugins: [
    'pug'
  ],

  /**
   * 下面這些rules是用來設定從外掛來的規範程式碼的規則，使用必須去掉字首eslint-plugin-
   * 主要有如下的設定規則，可以設定字串也可以設定數字，兩者效果一致
   * "off" -> 0 關閉規則
   * "warn" -> 1 開啟警告規則
   * "error" -> 2 開啟錯誤規則
   * ESLint 規則，如需修改請參考：https://eslint.org/docs/rules/
   */
  rules: {
    'accessor-pairs': 2,
    'array-bracket-newline': 2,
    'array-bracket-spacing': 2,
    'array-callback-return': 2,
    'array-element-newline': [
      2, 'consistent', {
        ArrayExpression: {
          multiline: true,
          minItems: 5
        },
        ArrayPattern: 'never'
      }
    ],
    'arrow-body-style': 2,
    'arrow-parens': [
      2, 'as-needed', {
        requireForBlockBody: true
      }
    ],
    'arrow-spacing': 2,
    'block-scoped-var': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'callback-return': 2,
    'camelcase': 2,
    'capitalized-comments': [2, 'never'],
    'class-methods-use-this': 2,
    'comma-dangle': 2,
    'comma-spacing': [
      2, {
        before: false,
        after: true
      }
    ],
    'comma-style': 2,
    'complexity': 2,
    'computed-property-spacing': 2,
    'consistent-return': 2,
    'consistent-this': 2,
    'constructor-super': 2,
    'curly': 2,
    'default-case': 1,
    'default-case-last': 2,
    'default-param-last': 2,
    'dot-location': 2,
    'dot-notation': 0,
    'eol-last': 2,
    'eqeqeq': 2,
    'for-direction': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'func-names': [1, 'as-needed'],
    'func-style': 0,
    'function-call-argument-newline': [2, 'never'],
    'function-paren-newline': [2, 'never'],
    'generator-star-spacing': 2,
    'getter-return': 2,
    'global-require': 0,
    'grouped-accessor-pairs': 2,
    'guard-for-in': 2,
    'handle-callback-err': 2,
    'id-blacklist': 2,
    'id-denylist': 2,
    'id-length': [2, { 'exceptions': ['x', 'y', 'z'] }],
    'id-match': 2,
    'implicit-arrow-linebreak': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'indent-legacy': 0,
    'init-declarations': 2,
    'jsx-quotes': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'line-comment-position': 2,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'lines-around-comment': [
      2, {
        'beforeBlockComment': true,
        'afterBlockComment': false,
        'beforeLineComment': true,
        'afterLineComment': false,
        'allowBlockStart': true,
        'allowBlockEnd': false,
        'allowObjectStart': true,
        'allowObjectEnd': false
      }
    ],
    'lines-around-directive': 2,
    'lines-between-class-members': 2,
    'max-classes-per-file': 2,
    'max-depth': 2,
    'max-len': [
      1, {
        code: 140,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    'max-lines': [
      1, {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      1, {
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': 2,
    'max-params': 2,
    'max-statements': 0,
    'max-statements-per-line': 0,
    'multiline-comment-style': 0,
    'multiline-ternary': 2,
    'new-cap': 2,
    'new-parens': 2,
    'newline-before-return': 2,
    'newline-per-chained-call': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 2,
    'no-bitwise': 2,
    'no-buffer-constructor': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-catch-shadow': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-confusing-arrow': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-const-assign': 2,
    'no-constant-condition': 2,
    'no-constructor-return': 2,
    'no-continue': 2,
    'no-control-regex': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-empty': 1,
    'no-empty-character-class': 2,
    'no-empty-function': [2, { 'allow': ['arrowFunctions'] }],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-import-assign': 2,
    'no-inline-comments': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-loss-of-precision': 2,
    'no-magic-numbers': [
      2, {
        ignore: [0, -1, 1],
        ignoreArrayIndexes: true,
        detectObjects: false
      }
    ],
    'no-misleading-character-class': 2,
    'no-mixed-operators': 2,
    'no-mixed-requires': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': 2,
    'no-native-reassign': 2,
    'no-negated-condition': 2,
    'no-negated-in-lhs': 2,
    'no-nested-ternary': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-nonoctal-decimal-escape': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-path-concat': 2,
    'no-plusplus': [
      2, {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-process-exit': 2,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-restricted-exports': 2,
    'no-restricted-globals': 2,
    'no-restricted-imports': 2,
    'no-restricted-modules': 2,
    'no-restricted-properties': 2,
    'no-restricted-syntax': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-setter-return': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-sparse-arrays': 2,
    'no-sync': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-underscore-dangle': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-unused-vars': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-unused-private-class-members': 0,
    'no-use-before-define': 2,
    'no-useless-backreference': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'nonblock-statement-body-position': 2,
    'object-curly-newline': 2,
    'object-curly-spacing': 2,
    'object-property-newline': 2,
    'object-shorthand': 2,
    'one-var': 2,
    'one-var-declaration-per-line': 2,
    'operator-assignment': 2,
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [
      1,
      'never'
    ],
    'padding-line-between-statements': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-exponentiation-operator': 2,
    'prefer-named-capture-group': 2,
    'prefer-numeric-literals': 2,
    'prefer-object-spread': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': 2,
    'prefer-rest-params': 0,
    'prefer-spread': 2,
    'prefer-template': 2,
    'quotes': [
      1,
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'quote-props': [
      2,
      'consistent'
    ],
    'radix': 2,
    'require-atomic-updates': 2,
    'require-await': 2,
    'require-unicode-regexp': 0,
    'require-yield': 2,
    'rest-spread-spacing': 2,
    'semi': [
      2,
      'always'
    ],
    'semi-spacing': 2,
    'semi-style': 2,
    'sort-imports': [
      2, {
        ignoreMemberSort: true,
        ignoreDeclarationSort: true
      }
    ],
    'sort-keys': 0,
    'sort-vars': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2, {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'strict': 2,
    'switch-colon-spacing': 2,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': 2,
    'unicode-bom': 2,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,
    'vars-on-top': 2,
    'wrap-iife': 2,
    'wrap-regex': 2,
    'yield-star-spacing': 2,
    'yoda': 2
  }
};
