const Plotly = require('plotly.js-dist');

class PlotlyService {
	getPlot(data, elementId) {
		Plotly.newPlot( elementId, data );
	}
}

export default PlotlyService;