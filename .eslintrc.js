module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: [
    '@vue/prettier',
    '@vue/typescript',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:vue/essential',
  ],
  rules: {
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/no-unresolved': 'error',
    'import/order': ['error'],
    'import/namespace': 0,
    'no-console': 'off',
    'no-debugger': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['sort-imports-es6-autofix'],
}
