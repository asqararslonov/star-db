import React from 'react';
import ReactDOM from 'react-dom'
import App from "./Components/App/App";
import SwapiService from "./services/swapi-service";

const API = async () => {
    const api = new SwapiService();

    const people = await api.getPerson(1)
    const planet = await api.getPlanet(1)
    const starship = await api.getStarship(3)

    // List of ids for starship API
    // 2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28
    // 29, 31, 32, 39, 40, 41, 43, 47, 48, 49, 52, 58, 59, 61

    console.log(people)
    console.log(planet)
    console.log(starship)
}
API()
ReactDOM.render( <App/>, document.querySelector("#root") )