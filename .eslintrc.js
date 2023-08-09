module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/standard',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    rules: {
        // 任意のESLintルールをここに追加

        // もし特定のルールを無効にしたい場合、例として：
        // "vue/no-v-html": "off",
    }
};
