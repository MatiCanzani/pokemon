module.exports = {
    root: true,
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
      'airbnb-typescript/base',
      'prettier',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: "latest",
      project: './tsconfig.eslint.json',
      parser: "@typescript-eslint/parser"
    },
    rules: {
      // ...
      'prettier/prettier': ['error', { singleQuote: true }]
    }
  };
