module.exports = {
  rules: {
    'semi': 'error',
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
