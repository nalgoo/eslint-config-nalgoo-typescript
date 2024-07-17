const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');

module.exports = {
	plugins: [
		'react',
		'react-refresh',
		'eslint-comments'
	],

	extends: [
		'airbnb',
		'airbnb/hooks',
		'plugin:eslint-comments/recommended',
	],

	rules: {
		// Enforces consistent indentation
		// https://eslint.org/docs/rules/indent
		// we are changing number of spaces to TAB character from airbnb rule
		indent: [baseStyleRules.indent[0], 'tab', baseStyleRules.indent[2]],

		// Disallows all tabs
		// https://eslint.org/docs/rules/no-tabs
		// we are allowing TAB character for indentation
		'no-tabs': ['error', { allowIndentationTabs: true }],

		// Validate JSX indentation
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		// changed spaces to TAB
		'react/jsx-indent': ['error', 'tab'],

		// Validate props indentation in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		// changed spaces to TAB
		'react/jsx-indent-props': ['error', 'tab'],

		// Enforces a maximum line length
		// https://eslint.org/docs/rules/max-len
		// increase limit to 120 chars (from 100)
		'max-len': ['error', 120],

		// Don't warn when a constant (string, number, boolean, templateLiteral) is exported aside one or more components.
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
};
