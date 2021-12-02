import React, { Component } from "react";
import StarshipDetails from "../sw-components/starship-details";

import Header from "../header/header";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import RandomPlanet from "../random-planet/random-planet";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";
import "bootswatch/dist/darkly/bootstrap.min.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapiService: new Service() };
    });
  };

  render() {
    const { onServiceChange } = this;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app container">
              <Header onServiceChange={onServiceChange} />
              <Route path="/" component={RandomPlanet} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <h1 className="text-center my-5">Welcome To StarDB</h1>
                  )}
                />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planet/:id?" component={PlanetsPage} />
                <Route path="/starship" component={StarshipsPage} />
                <Route
                  path="/starship/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />
                <Route
                  render={() => (
                    <h1 className="text-center my-5 text-danger ">
                      Page not Found !!!
                    </h1>
                  )}
                />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
