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

		// Enforce a defaultProps definition for every prop that is not a required prop
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		// disable rule, we are using interfaces, types and default arguments
		'react/require-default-props': ['error', {
			forbidDefaultForRequired: true,

			// will be added in next version
			// functions: 'defaultArguments',

			// will be deprecated in next version
			ignoreFunctionalComponents: true,
		}],
	},
};
