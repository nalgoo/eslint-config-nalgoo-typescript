module.exports = {
	extends: [
		'./rules/react',
		'./rules/style',
		'./rules/typescript',
		'./rules/storybook',
	].map(require.resolve),
	rules: {},
};
