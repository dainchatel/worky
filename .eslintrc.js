module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'comma-dangle': [2, { objects: 'always-multiline' }], 
  },
}
