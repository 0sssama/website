module.exports = {
	'*.{ts,tsx}': [() => 'tsc --noEmit', 'prettier --write', 'eslint --fix'],
};
  