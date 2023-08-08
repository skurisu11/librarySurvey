module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-console': 'warn'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'  // Vueの推奨ルールを追加
    ],
    plugins: [
        'vue'  // eslint-plugin-vueを追加
    ]
};

// @rushstack/eslint-patch のモンキーパッチを適用
