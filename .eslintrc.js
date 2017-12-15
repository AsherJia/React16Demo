
module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'airbnb',
    'plugins': [
        'react'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        }
    },
    'parser': 'babel-eslint',
    'rules': {
        'semi': 0,
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'comma-dangle': 0,
        'jsx-quotes':['error', 'prefer-single'],
        'global-require': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': ['error', 4],
        'react/prefer-stateless-function': [0],
        'no-underscore-dangle': 0,
        'react/prop-types': 0,
        'click-events-have-key-events': 0,
        'arrow-body-style': ["error", "as-need"]
    },
};
