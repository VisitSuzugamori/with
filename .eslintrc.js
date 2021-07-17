module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2020: true,
    commonjs: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:json/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'node', 'no-secrets', 'jest', 'json'],
  rules: {
    'prettier/prettier': 0,
    'node/exports-style': ['error', 'module.exports'],
    'node/no-deprecated-api': ['error'],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
  },
};
