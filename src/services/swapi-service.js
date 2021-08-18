export default  class SwapiService {

    _apiBase = 'https://swapi.dev/api';

      async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) throw new Error(`ERROR: STATUS : ${res.status}`)
        return await res.json()
    }

    // TO GET PEOPLE
    getAllPeople = () =>    this.getResource(`/people`);
    getPerson = (id) =>    this.getResource(`/people/${id}`);

    // TO GET PLANET
    getAllPlanet = () => this.getResource(`/planets`);
    getPlanet = (id) => this.getResource(`/planets/${id}`);

    // TO GET STARSHIPS
    getAllStarship = () => this.getResource(`/starships`);
    getStarship = (id) => this.getResource(`/starships/${id}`);
}