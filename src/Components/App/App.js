import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';
import 'bootswatch/dist/darkly/bootstrap.min.css';

class App extends Component {

	state = {
		showRandomPlanet: true
	};

	toggleRandomPlanet = () => this.setState(state => ({showRandomPlanet: !state.showRandomPlanet}));

	render() {
		const {state: {showRandomPlanet}, toggleRandomPlanet} = this;
		const planet = showRandomPlanet ? <RandomPlanet/> : null;

		return (
				<div className='container'>
					<Header/>
					{planet}

					<button
							className='toggle-planet btn btn-warning btn-lg'
							onClick={toggleRandomPlanet}
					> Toggle Random Planet
					</button>

					<div className="row mb2">
						<div className="col-md-6">
							<ItemList/>
						</div>
						<div className="col-md-6">
							<PersonDetails/>
						</div>
					</div>
				</div>
		);
	}
};

export default App;