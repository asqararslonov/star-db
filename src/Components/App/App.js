import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./app.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import SwapiService from "../../services/swapi-service";

class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: null,
    loader: true,
  };

  toggleRandomPlanet = () =>
    this.setState(state => ({ showRandomPlanet: !state.showRandomPlanet }));

  onPersonSelected = async url => {
    const array = url.split("/");
    const personId = +array[array.length - 2];
    this.setState({ loader: true });
    try {
      const response = await new SwapiService().getPerson(personId);
      this.setState({
        selectedPerson: { ...response, id: personId },
        loader: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      state: { showRandomPlanet, selectedPerson, loader },
      toggleRandomPlanet,
      onPersonSelected,
    } = this;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className='container'>
        <Header />
        {planet}

        <button
          className='toggle-planet btn btn-warning btn-lg'
          onClick={toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onPersonSelected={onPersonSelected} />
          </div>
          <div className='col-md-6'>
            <PersonDetails person={selectedPerson} loading={loader} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
