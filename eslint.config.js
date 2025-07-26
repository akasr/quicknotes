import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Base ESLint recommended rules
      ...js.configs.recommended.rules,

      // Prettier config to disable conflicting rules
      ...prettier.rules,

      // React rules (Airbnb-style, excluding formatting)
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'warn',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-string-refs': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unused-prop-types': 'error',
      'react/prefer-es6-class': ['error', 'always'],
      'react/prop-types': 'off', // Turn off if using TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/require-render-return': 'error',
      'react/self-closing-comp': 'error',
      'react/sort-comp': 'error',

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // JavaScript rules (Logic-focused, formatting handled by Prettier)
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-new-object': 'error',
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      'new-parens': 'error',
      camelcase: ['error', { properties: 'never' }],
      'one-var': ['error', 'never'],
      'prefer-object-spread': 'error',

      // Keep only non-formatting related rules
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'prefer-template': 'error',
    },
  },
];
