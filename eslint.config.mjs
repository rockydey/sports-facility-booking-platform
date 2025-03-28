import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  tseslint.configs.recommended,
  // eslintPluginPrettierRecommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
    },
    ignores: ['.node_modules/*', '.env/*', '.dist/*'],
  },
]);
