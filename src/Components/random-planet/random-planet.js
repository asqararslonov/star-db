import React, { Component } from 'react';
import swapiService from '../../services/swapi-service'
import './random-planet.css';
import {/* PushSpinner, TraceSpinner, WaveSpinner, CombSpinner,*/ PushSpinner} from "react-spinners-kit";
export default class RandomPlanet extends Component {
constructor() {
  super();

  this.state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    loader: true,
  }
this.updatePlanet()
}
  updatePlanet = async () => {
    const response = await new swapiService().getPlanet(Math.floor((Math.random()*25)-2))

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
    const {name,population, rotationPeriod, diameter, loader} = this.state

    const load =
    <PushSpinner  style={{margin: "0 auto"}} size={130} color="#00bc8c" loading={true} />;

    return (
        <div className={"random-planet jumbotron rounded"}>
        <div style={{margin: "0 auto"}} className={loader === false? "loader-no": null}>
          {loader === true? load : null} 
        </div>
      <div   className={  loader === true?  "hidden" : "random-planet jumbotron rounded"} >
        <img className="planet-image"
             alt={this.props.key}

             src={`https://starwars-visualguide.com/assets/img/planets/5.jpg`} />
        <div className={  loader === true?  "hidden" : null}>
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
      </div>
        </div>
    );
  }
}
