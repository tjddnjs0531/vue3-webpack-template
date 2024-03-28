module.exports = {
	'env': {
		'browser': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-strongly-recommended'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
        
	}
}
