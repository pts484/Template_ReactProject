module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended', 'prettier'],
	overrides: [],
	parserOptions: {
		project: ['./tsconfig.json'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'prettier/prettier': 'error',
		'indent': 0, // ['error', 'tab'],
		'comma-dangle': ['error', 'only-multiline'],
		'quote-props': ['error', 'consistent-as-needed'],
		'semi': ['error', 'always'],
		'no-invalid-this': 'error',
		'camelcase': ['error', { properties: 'always' }],
		// disable the rule for all files
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/naming-convention': 'warn',

		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': 0,

		'no-var-requires': 0,
		'@typescript-eslint/no-var-requires': 0,

		'no-floating-promises': 0,
		'@typescript-eslint/no-floating-promises': 0,

		'strict-boolean-expressions': 0,
		'@typescript-eslint/strict-boolean-expressions': 0,

		'prefer-nullish-coalescing': 0,
		'@typescript-eslint/prefer-nullish-coalescing': 0,

		'no-namespace': 0,
		'@typescript-eslint/no-namespace': 0,
	},
};
