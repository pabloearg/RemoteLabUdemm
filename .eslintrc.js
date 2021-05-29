module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
    'react-hooks'
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extensionclear': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': 'off',
    'no-empty': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    eqeqeq: 'off',
    'no-useless-constructor': 'off',
    'prefer-destructuring': 'off',
    'react/sort-comp': 'off',
    'react/no-unused-state': 'off',
    camelcase: 'off',
    'react/no-unused-prop-types': 'off',
    'no-param-reassign': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'react/jsx-no-bind': 'off',
    'no-useless-escape': 'off',
    'no-return-await': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': 'off'
  },
  globals: {
    fetch: false
  },
  settings: {
    'import/resolver': 'react-native',
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$'] }]

  },
};
