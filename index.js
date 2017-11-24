module.exports = {
    extends: [
      'airbnb-base',
      'plugin:lodash-fp/recommended'
    ],
    rules: {
        'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
        'func-names': 0,
        'global-require': 0,
        'no-console': 0,
        'no-throw-literal': 0,
        "no-use-before-define": 0,
        "lodash-fp/prefer-identity": 0
    },
    settings: {
        'import/resolver': 'webpack',
    },
    env: {
        browser: true,
    },
    plugins: [
        'vue',
        'lodash-fp'
    ]
};
