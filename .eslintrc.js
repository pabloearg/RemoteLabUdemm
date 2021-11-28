module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:import/typescript',
    'airbnb-typescript/base',
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
    'import/prefer-default-export': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    eqeqeq: 'off',
    'import/extensions': 'off',
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
    'react/static-property-placement': 'off',
    'react/jsx-filename-extension': 'off',
    'react/static-property-placement': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quotes': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/indent': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'key-spacing': 'off',
    'no-dupe-keys': 'off',
    'linebreak-style': ['error', 'windows'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  globals: {
    fetch: false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Required for Standard plugin
  },
  settings: {
    'import/resolver': 'react-native',
    'import/extensions': ['.android.js', '.ios.js', '.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
    'import/no-unresolved': [2, { ignore: ['.png$', '.webp$', '.jpg$'] }]

  },
};
