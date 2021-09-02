import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Spinner from "../Spinner/Spinner";
import {generateRandomId} from "../../Helper/generateRandomId";
import {ErrorIndicator} from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {

	interval = null;

	state = {
			planetId: generateRandomId(3, 8),
			name: null,
			population: null,
			rotationPeriod: null,
			diameter: null,
			loader: true,
			error: false,
		};

	componentDidMount() {
		this.updatePlanet()

		// this.interval = setInterval( () => {
		// 	this.updatePlanet();
		// }, 5000 );
	}

	componentWillUnmount() {
		clearInterval( this.interval )
	}
	

	onError = () => this.setState({error: true, loader: false});

	updatePlanet = async () => {
		try {
			this.setState({ loader: true });

			const response = await new SwapiService().getPlanet(this.state.planetId);

			this.setState({
				planetId: generateRandomId(3, 8),
				name: response.name,
				population: response.population,
				rotationPeriod: response.rotation_period,
				diameter: response.diameter,
				loader: false
			});
		}catch(e){
			this.onError()
			}
	
	};

	RenderPlanet = () => {
		const {name, population, rotationPeriod, diameter, loader, planetId, error} = this.state;

		if (loader || error) return null;

		return (
				<>
					<img className="planet-image"
							 src={`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`}
							 alt=''
					/>
					<div>
						<h4>{name}</h4>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<span className="term">Population</span>
								<span>{population}</span>
							</li>
							<li className="list-group-item">
								<span className="term">Rotation Period</span>
								<span>{rotationPeriod}</span>
							</li>
							<li className="list-group-item">
								<span className="term">Diameter</span>
								<span>{diameter}</span>
							</li>
						</ul>
					</div>
				</>
		)
	};

	render() {
		const {state: {loader, error}, RenderPlanet} = this;

		return (
				<div className="random-planet jumbotron rounded">

					<Spinner isLoading={loader} align='center'/>
					<RenderPlanet/>
					{ error ? <ErrorIndicator/> : null }

				</div>
		);
	}
}
