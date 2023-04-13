module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": 0,
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
    }],
    "no-unused-variable": "off",
    "no-unused-vars": "off",
  },
};
