// @ts-ignore
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-console': 'error',
    'react-native/no-inline-styles': 0,
    'react-native/sort-styles': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
