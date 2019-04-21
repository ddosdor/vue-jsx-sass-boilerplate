module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "extends": [
        "airbnb-base",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'no-underscore-dangle' : 'off',
        'prefer-const': 'off',
        'global-require': 'off',
        'no-use-before-define': 'off',
        'allowImportExportEverywhere': 0,
        'import/no-dynamic-import': 'off',
        'func-names': 'off',
        'max-len': 'off',
        'object-curly-newline': 'off',
        'import/extensions': ['error', 'never', {
          js: 'never',
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        }],
        "indent": "off",
        "class-methods-use-this": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"
    }
};