module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'file-extension-in-import-ts'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'file-extension-in-import-ts/file-extension-in-import-ts': 'error'
  }
}
