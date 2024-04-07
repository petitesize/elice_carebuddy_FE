module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules/', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    'prettier',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'on',
    '@typescript-eslint/no-unused-vars': 'on',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
  },
};
