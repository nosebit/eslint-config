const path = require("path");

const tsConfig = path.resolve(__dirname, "tsconfig.json");

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "./packages/typescript",
  ],
  parserOptions: {
    project: tsConfig,
  },
  settings: {
    "import/resolver": {
      node: {
        project: tsConfig,
      },
      typescript: {
        project: tsConfig,
      },
    },
  },
};
