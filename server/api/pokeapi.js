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

  async getBerryFirmnessByNameOrID(id, name) {
    const result = await this.get(`berry-firmness/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getBerryFlavorByNameOrID(id, name) {
    const result = await this.get(`berry-flavor/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getContestTypeByNameOrID(id, name) {
    const result = await this.get(`contest-type/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getContestEffectByNameOrID(id, name) {
    const result = await this.get(`contest-effect/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }
}

module.exports = PokeAPI;