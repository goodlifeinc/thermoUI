export default (config, env, helpers) => {
	let rules = helpers.getRules(config);
    
	let { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
	rule.exclude = /(node_modules)/;
    
	const rulePlotly = {
		index: Object.keys(rules).length,
		rule: {
			test: /\.js$/,
			use: [
				'ify-loader',
				'transform-loader?plotly.js/tasks/compress_attributes.js'
			]
		}
	};
    
	rules.push(rulePlotly);
};