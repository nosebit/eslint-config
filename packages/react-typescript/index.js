module.exports = {
  extends: [
    '@nosebit/eslint-config-react',
    '@nosebit/eslint-config-typescript',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
