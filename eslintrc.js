module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'mongo': true
    },
    'extends': ['eslint:recommended', 'plugin:node/recommended'],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react', 'mongodb', 'node'],
    'rules': {
        'indent': [2, 4],
        'linebreak-style': [2, 'unix'],
        'quotes': [2, 'single'],
        'semi': [2, 'never'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-trailing-spaces': [2]
    },
    'globals': {
        // Collections
        'Persons': true,
        'Modules': true,
        
        // More stuff
        // [...]

        // Packages
        'lodash': true,
        'i18n': true,
        'moment': true,
        'Messenger': true
    }
}