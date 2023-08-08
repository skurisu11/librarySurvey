module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',  // Vue3の基本的なリントルールを適用する
        'eslint:recommended'          // ESLintの推奨ルールを適用する
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    },
    env: {
        // ...
        webextensions: true,
        node: true,
    },
}
