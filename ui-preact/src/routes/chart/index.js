import { h, Component } from 'preact';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

import ChartComponent from '../../components/chart';
import WithTwo from '../../components/chart/withTwo';

export default class Chart extends Component {
	render({ data, withTwo }) {
		if (withTwo) {
			return <WithTwo data={data} />;
		}
		return <ChartComponent data={data} />;
		
	}
}
