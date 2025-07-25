import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
    files: ['**/*.jsx', '**/*.js'], // Handle JS/JSX files
  },
  {
    files: ['**/*.css'], // Handle CSS files separately
    rules: {
      'no-unused-expressions': 'off', // Allow @tailwind directives
    },
  },
];