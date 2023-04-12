module.exports = {
  extends: [
    "@nosebit/eslint-config-base",
    "./rules/eslint",
    "./rules/typescript",
  ].map(require.resolve),
  rules: {},
};
