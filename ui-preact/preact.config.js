const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default (config, env, helpers) => {
	let rules = helpers.getRules(config);

	// https://github.com/developit/preact-cli/issues/593
	// remove the old
	const uglifyJsPlugin = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0];
	if (uglifyJsPlugin) {
		const { index } = uglifyJsPlugin;
		// console.info(`helpers.getPluginsByName(config, 'UglifyJsPlugin'): ${JSON.stringify(helpers.getPluginsByName(config, 'UglifyJsPlugin'))}`);
		// console.info(`index: ${index}`);
		// console.info(`before config.plugins: ${JSON.stringify(config.plugins[index])}`);
		// console.info(`before config.plugins.length: ${JSON.stringify(config.plugins.length)}`);
		config.plugins.splice(index, 1, new UglifyJsPlugin());
		// console.info(`after config.plugins: ${JSON.stringify(config.plugins[index])}`);
		// console.info(`after config.plugins.length: ${JSON.stringify(config.plugins.length)}`);
	}
    
	let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	rule.exclude = /(node_modules)/;
    
	const rulePlotly = {
		index: Object.keys(rules).length,
		rule: {
			test: /\.js?$/,
			use: [
				'ify-loader',
				'transform-loader?plotly.js/tasks/compress_attributes.js'
			]
		}
	};
    
	rules.push(rulePlotly);
};