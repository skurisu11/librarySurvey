require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error'
    }
};
