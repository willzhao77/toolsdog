require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  // 删除了头部的/* eslint-env node */ 注释， 它是用来指定文件为 node 环境的。
  // 我们给 ESLint 指定一下常用环境，即 env 属性配置，让 ESLint 自己去匹配
  // 我们不写这个配置的话默认它只支持浏览器 browser 的规则解析，写上环境配置，我们最终的配置文件如下
  env: {
    // 浏览器环境
    browser: true,
    // Node环境
    node: true,
    // 启用除了modules以外的所有 ECMAScript 6 特性
    es2021: true,
  },
  root: true,
  'extends': [
    // 这里, 引入我们自动配置的那个导出文件
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential', //ESLint Vue3 插件扩展
    'eslint:recommended', //ESLint 官方扩展
    '@vue/eslint-config-prettier/skip-formatting'
    //Prettier NPM 扩展， Prettier 扩展放到最后面，原因是 Prettier 会格式化代码，是为了保证最终代码格式统一。
  ],
  // 这里， lint 执行期间访问额外的全局变量，简单说就是开发者自定义的全局变量，我们依次加上这些属性就可以了。
  // readonly 代表只读，writable 代表可写，可写就是可以手动覆盖这个全局变量的意思
  // 我们当然是不允许覆盖了，所以全部都设置成了 readonly
  globals: { 
    defineEmits: "readonly",
    defineProps: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ["warn", "never"], // 禁止尾部使用分号
    "no-debugger": "warn", // 禁止出现 debugger
  },
  /*
  off 或 0 关闭对该规则的校验
  warn 或 1 启用规则，不满足时抛出警告，不会退出编译进程
  error 或 2 启用规则，不满足时抛出错误，会退出编译进程

  注意，如果某项规则，有额外的选项，可以通过数组进行传递，
  数组的第一位必须是错误级别，就比如我们配置的 semi 规则中的 never 就是额外配置项。
  */
}
