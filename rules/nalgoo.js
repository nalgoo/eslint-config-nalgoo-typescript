module.exports = {
	plugins: [
		'react',
		'import',
		'@typescript-eslint',
		'storybook',
	],

	parser: '@typescript-eslint/parser',

	rules: {
		// change indent to TABS:
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['off'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		// allow single Named-export
		'import/prefer-default-export': 'off',
		// disable prop types, we have interfaces
		'react/prop-types': 'off',
	},

	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)', '*.story.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: {
				'import/no-anonymous-default-export': 'off',
				'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
				'react/jsx-props-no-spreading': 'off',
			},
		},
	],
};
