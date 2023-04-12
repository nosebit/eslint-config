module.exports = {
  extends: [
    '@nosebit/eslint-config-base',
    './rules/eslint',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
