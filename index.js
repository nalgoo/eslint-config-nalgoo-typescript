module.exports = {
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:eslint-comments/recommended',
		'plugin:storybook/recommended',
		'./rules/nalgoo',
	].map(require.resolve),
	rules: {}
};
