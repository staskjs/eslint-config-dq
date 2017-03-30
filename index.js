module.exports = {
    extends: "airbnb-base",
    rules: {
        'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
        'func-names': 0,
        'global-require': 0,
        'no-console': 0,
        'no-throw-literal': 0,
    },
    settings: {
        'import/resolver': 'webpack',
    },
    env: {
        browser: true,
    },
    plugins: [
        'vue',
    ]
};
