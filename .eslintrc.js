require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    plugins: ['import'],
    rules: {
        'import/no-unresolved': 'error'
    }
};
