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
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', { objects: 'always-multiline' }], 
  },
}
