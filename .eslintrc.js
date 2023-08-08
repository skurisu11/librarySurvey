module.exports = {
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
    ],
    rules: {
        // ここにカスタムルールを追加できます
    }
}
