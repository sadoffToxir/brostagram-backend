module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'import/no-unresolved': 0,
    'indent': ['error', 2],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
  },
}
