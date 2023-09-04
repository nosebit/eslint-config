module.exports = {
  extends: [
    '@nosebit/eslint-config-typescript',
    '@nosebit/eslint-config-react',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
