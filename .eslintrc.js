require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ["import"],
    rules: {
        "import/no-unresolved": "error"
    }
};

// require('@rushstack/eslint-patch/modern-module-resolution');
//
// module.exports = {
//     root: true,
//     parserOptions: {
//         ecmaVersion: 'latest',
//     },
//     extends: [
//         'plugin:vue/vue3-essential',
//         'eslint:recommended',
//     ],
//     rules: {
//         'no-restricted-imports': ['error', { patterns: ['./', '../'] }],
//     },
//     env: {
//         browser: true,  // ブラウザ環境をサポート
//         webextensions: true,
//         node: true,
//     },
// };
