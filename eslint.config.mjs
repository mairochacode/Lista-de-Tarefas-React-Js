import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    globals: globals.browser,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": 0
  },
};
