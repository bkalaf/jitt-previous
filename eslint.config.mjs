import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "webpack*.*",
        "**/.webpack/",
        "eslint.config.mjs",
        "playground-1.mongodb.js",
        "src/assets/",
        "bin/test.ts",
        "**/forge.config.ts",
        "**/postcss.config.ts",
        "**/postcss.config.js",
        "**/tailwind.config.js",
        "**/tempCodeRunnerFile.ts",
        "bin/test.ts",
        "**/forge.config.ts",
        "**/postcss.config.ts",
        "**/postcss.config.js",
        "**/tailwind.config.js",
        "**/tempCodeRunnerFile.ts",
        "**/dist/",
        "**/mongodb-realm/",
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/electron",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        "react-hooks": fixupPluginRules(reactHooks),
        prettier
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "C:\\Users\\bobby\\OneDrive\\Desktop\\Code\\jitt\\tsconfig.json",
            exclude: [".\\tailwind.config.js"],
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "react/jsx-uses-react": "error",
        'import/namespace': 'off',
        'no-console': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error']
    },
}];