module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["src/types/*.ts", ".eslintrc.js"],
  rules: {
    semi: "off",
    "@typescript-eslint/semi": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "quotes": "off",
    "@typescript-eslint/quotes": "off"
  },
};
