// https://eslint.org/docs/user-guide/configuring
/*
  # install eslint npms
  yarn global add @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-eslint
  yarn global add @vue/eslint-config-prettier @vue/eslint-config-standard @vue/eslint-config-typescript
  yarn global add eslint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node
  yarn global add eslint-plugin-prettier eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue
*/
module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    node: true,
    browser: true,
    jest: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'jest',
    'standard',
    'promise'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
  }
}
