module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
	rules: {
		'@typescript-eslint/no-empty-function': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/semi': 2,
		'@typescript-eslint/quotes': [2, 'single', 'avoid-escape'],
		'@typescript-eslint/no-explicit-any': ['off']
	},
	env: {
		node: true
	}
};
