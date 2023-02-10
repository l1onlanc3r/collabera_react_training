module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/label-has-associated-control": 0
  },
};

// "react/prop-types": "off"