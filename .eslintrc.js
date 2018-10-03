module.exports = {
  extends: ['yoctol', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'],
  rules: {
    'react/prop-types': ['warn'],
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
};
