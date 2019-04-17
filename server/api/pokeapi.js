const { RESTDataSource } = require('apollo-datasource-rest');
const MaxSenpaiUtils = require('../util/text');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getPokemonByNameOrID(id, name) {
    const result = await this.get(`pokemon/${MaxSenpaiUtils.getLeftOrRight(id, name) || 25}`);

    return result;
  }

  async getBerryByNameOrID(id, name) {
    const result = await this.get(`berry/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);

    return result;
  }
}

module.exports = PokeAPI;