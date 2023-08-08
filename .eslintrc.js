module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    '@vue/prettier',
    'plugin:prettier/recommended', // Prettierの設定を有効化し、Prettierとの競合を回避
  ],
}
