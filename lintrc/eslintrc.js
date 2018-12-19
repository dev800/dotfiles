module.exports = {
  // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  // 对Babel解析器的包装使其与 ESLint 兼容。
  parserOptions: {
    // 代码是 ECMAScript 模块
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    // 预定义的全局变量，这里是浏览器环境
    browser: true,
    jquery: true
  },
  // 扩展一个流行的风格指南，即 eslint-config-standard
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    // standard风格的依赖包
    "standard",
    // standard风格的依赖包
    "promise"
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-unused-vars': 'warn',
    'vue/no-side-effects-in-computed-properties': 'warn',
    'camelcase': 'warn',
    'no-constant-condition': 0,
    'space-before-function-paren': 0
  }
}
