import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

import PlotlyService from '../../services/plotly';

export default class Chart extends Component {
	state = {
		data: {
			name: 'default'
		}
	}

	componentWillReceiveProps(nextProps) {
		const { data } = nextProps.data;
		const Srevice = new PlotlyService();
		Srevice.getPlot([data], 'plot');
		this.setState({ data });
	}

	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>{this.state.data.name} route</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">{this.state.data.name} card</h2>
						<div class=" mdc-typography--caption">Welcome to {this.state.data.name} route</div>
					</div>
					<div class={style.cardBody}>
						<div id="plot" />
					</div>
					<Card.Actions>
						<Card.ActionButton>OKAY</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
