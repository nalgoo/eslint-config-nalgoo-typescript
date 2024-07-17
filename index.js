module.exports = {
	extends: [
		'./rules/style',
		'./rules/typescript',
		'./rules/storybook',
	].map(require.resolve),
	rules: {},
};
