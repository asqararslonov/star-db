export default class SwapiService {

	_apiBase = 'https://swapi.dev/api/';

	async _getResource(url) {
		try{
			const res = await fetch(`${this._apiBase}${url}`);
			return await res.json();
		}catch(e){
			console.log(`Error:`, e);
		}
	};

	// TO GET PEOPLE
	getAllPeople = () => this._getResource('/people/');
	getPerson = (id) => this._getResource(`/people/${id}`);

	// TO GET PLANET
	getAllPlanets = () => this._getResource('/planets');
	getPlanet = (id) => this._getResource(`/planets/${id}`);

	// TO GET STARSHIPS
	getAllStarships = () => this._getResource('/starships');
	getStarships = (id) => this._getResource(`/starships/${id}`);
};