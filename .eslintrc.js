module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		project: ['./tsconfig.json'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', 'only-multiline'],
		'quote-props': ['error', 'consistent-as-needed'],
		'semi': ['error', 'always'],
		'prettier/prettier': 'error',
		'camelcase': ['error', { properties: 'always' }],
		'no-unused-vars': 'error',
		'no-invalid-this': 'error',

		'@typescript-eslint/no-floating-promises': 0,
	},
};
