import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

import PlotlyService from '../../services/plotly';

export default class WithTwo extends Component {

	componentWillReceiveProps(nextProps) {
		const { a, b } = nextProps.data;
		const Srevice = new PlotlyService();
		Srevice.getPlot([a.data, b.data], 'plot');
	}

	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Merged route</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Merged card</h2>
						<div class=" mdc-typography--caption">Welcome to merged route</div>
					</div>
					<div class={style.cardBody}>
						<div id="plot" />
					</div>
				</Card>
			</div>
		);
	}
}
