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
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/no-multi-comp': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'array-callback-return': 'off',
  },
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
};
