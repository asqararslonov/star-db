export default class SwapiService {

	_apiBase = 'https://swapi.dev/api/';

	async _getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) throw new Error(`ERROR KELDIIII: ${res.status}`);
		return await res.json();
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