import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './home';
import NotFoundPage from './notFound';
import Outside from './outside';
import Merged from './merged';

import FirebaseService from '../services/firebase';

import TemperatureContext from './temperature-context';

class App extends React.Component {
    state = {};
    firabase = null;

    constructor() {
		super();
		this.firebase = new FirebaseService( 1000 );
	}

	async componentWillMount() {
		this.setState({
			insideReport: await this.firebase.getInside(),
			outsideReport: await this.firebase.getOutside()
		});
	}

    render() {
        return (
            <TemperatureContext.Provider value={this.state}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/outside' component={Outside} />
                        <Route path='/merged' component={Merged} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </TemperatureContext.Provider>
        )
    }
}

export default App;