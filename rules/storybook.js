module.exports = {
	plugins: [
		'import',
		'react',
		'storybook',
	],

	extends: [
		'plugin:storybook/recommended',
	],

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
