const plugins = ["@vue/babel-plugin-transform-vue-jsx"]
// 生产环境移除console
if (process.env.VUE_APP_ENV === 'production') {
	plugins.push("transform-remove-console")
}
module.exports = {
	presets: [
		// '@vue/cli-plugin-babel/preset',
		'@vue/app'
	],
	'env': {
		'development': {
			'plugins': ['dynamic-import-node']
		},
		'production': {
			'plugins': ['transform-remove-console']
		}
	}
}