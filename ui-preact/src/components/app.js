import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Chart from '../routes/chart';
import NotFound from '../routes/404';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import FirebaseService from '../services/firebase';

export default class App extends Component {
	firebase = null;

	constructor() {
		super();
		this.firebase = new FirebaseService();
	}

	async componentWillMount() {
		this.setState({
			insideReport: await this.firebase.getInside(),
			outsideReport: await this.firebase.getOutside()
		});
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		const mergedData = { a: this.state.insideReport, b: this.state.outsideReport };
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Chart path="/" data={this.state.insideReport || {}} />
					<Chart path="/outside" data={this.state.outsideReport || {}} />
					<Chart path="/merged" data={mergedData} withTwo />
					<NotFound default />
				</Router>
			</div>
		);
	}
}
