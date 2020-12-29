// const {
//   NODE_ENV,
// } = process.env;
//
// const isDev = NODE_ENV === 'development';

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
  },
  extends: [
    'plugin:vue/essential',
    'eslint-config-airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint',
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extranous-dependencies': 0,
    'global-require': 0,
    "no-param-reassign": 0,
  },
  overrides: [
    {
      files: [
        'src/**/*.vue',
        'src/**/*.js',
        'src/**/*.jsx',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
