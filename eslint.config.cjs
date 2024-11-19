const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');
const reactRefresh = require('eslint-plugin-react-refresh');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
      import: importPlugin,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          endOfLine: 'auto',
        },
      ],
      'no-console': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'linebreak-style': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'default-param-last': 'off',
      'react/forbid-prop-types': 'off',
      camelcase: 'off',
      'no-shadow': 'off',
      'no-param-reassign': ['warn', { props: false }],
      'no-debugger': 'off',
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'import/no-anonymous-default-export': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
];
