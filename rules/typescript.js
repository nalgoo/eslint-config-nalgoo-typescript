const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');

module.exports = {
	plugins: [
		'@typescript-eslint',
		'import',
	],

	parser: '@typescript-eslint/parser',

	extends: [
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:import/typescript',
	],

	rules: {
		// Enforce consistent indentation
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/indent.md
		'@typescript-eslint/indent': [baseStyleRules.indent[0], 'tab', baseStyleRules.indent[2]],
	},
};
