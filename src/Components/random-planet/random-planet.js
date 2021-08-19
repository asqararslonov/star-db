import React, { Component } from 'react';
import swapiService from '../../services/swapi-service'
import './random-planet.css';
import { PushSpinner } from "react-spinners-kit";
export default class RandomPlanet extends Component {
constructor() {
  super();

  this.state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,

    loader: true
  }
this.updatePlanet()
}
  updatePlanet = async () => {
    const response = await new swapiService().getPlanet(1)

    this.setState({
      name: response.name,
      population: response.population,
      rotationPeriod: response.rotation_period,
      diameter: response.diameter,
      loader: false

    })

    console.log(response)
  }
  render() {
    const {name, population, rotationPeriod, diameter, loader} = this.state

    const load =  <PushSpinner size={130} color="#00bc8c" loading={true} />;

    return (
      <div className="random-planet jumbotron rounded">
        {loader === true? load : null}
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`} />
        <div>
          <h4>Planet Name</h4>
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
      </div>

    );
  }
}
