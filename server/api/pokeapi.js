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

  async getSuperContestEffectByID(id) {
    const result = await this.get(`super-contest-effect/${id}`);

    return result;
  }

  async getMoveByNameOrID(id, name) {
    const result = await this.get(`move/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveAilmentByNameOrID(id, name) {
    const result = await this.get(`move-ailment/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveBattleStyleByNameOrID(id, name) {
    const result = await this.get(`move-battle-style/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveCategoryByNameOrID(id, name) {
    const result = await this.get(`move-category/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveDamageClassByNameOrID(id, name) {
    const result = await this.get(`move-damage-class/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveLearnMethodByNameOrID(id, name) {
    const result = await this.get(`move-learn-method/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMoveTargetByNameOrID(id, name) {
    const result = await this.get(`move-target/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getMachineByID(id) {
    const result = await this.get(`machine/${id}`);
    
    return result;
  }

  async getLocationByNameOrID(id, name) {
    const result = await this.get(`location/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getLocationAreaByNameOrID(id, name) {
    const result = await this.get(`location-area/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getPalParkAreaByNameOrID(id, name) {
    const result = await this.get(`pal-park-area/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getRegionByNameOrID(id, name) {
    const result = await this.get(`region/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getEncounterMethodByNameOrID(id, name) {
    const result = await this.get(`encounter-method/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getEncounterConditionByNameOrID(id, name) {
    const result = await this.get(`encounter-condition/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }
}

module.exports = PokeAPI;