module.exports = {
	env: {
		browser: true,
	},
	root: true,
	plugins: ['es'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	rules: {
		'es/no-shared-array-buffer': 'error',          // iOS Safari <= 15.1, Samsung Internet latest
		'es/no-regexp-lookbehind-assertions': 'error', // iOS & macOS Safari latest
		'es/no-atomics': 'error',                      // iOS Safari <= 15.1
		'es/no-weakrefs': 'error',                     // iOS Safari <= 14.4
	}
};
