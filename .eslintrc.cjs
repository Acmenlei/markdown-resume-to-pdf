module.exports = {
	"globals": {
		"defineProps": 'readonly',
		"defineEmits": 'readonly',
		"defineExpose": 'readonly',
		"withDefaults": 'readonly'
	},
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		'plugin:prettier/recommended',
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
	],
	"parser": 'vue-eslint-parser',
	"parserOptions": {
		"parser": "@typescript-eslint/parser",
		"sourceType": "module"
	},
	"plugins": [
		"vue",
		"@typescript-eslint"
	],
	"rules": {
		"indent": 'off',
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		'vue/multi-word-component-names': "off"
	}
};
