const { RESTDataSource } = require('apollo-datasource-rest');
const MaxSenpaiUtils = require('../util/text');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async getEndpointByNameOrID(endpoint, id, name) {
    const result = await this.get(`${endpoint}/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);

    return result;
  }

  async getEndpointByID(endpoint, id) {
    const result = await this.get(`${endpoint}/${id}`);

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

  async getEncounterConditionValueByNameOrID(id, name) {
    const result = await this.get(`encounter-condition-value/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getEvolutionChainByID(id) {
    const result = await this.get(`evolution-chain/${id}`);
    
    return result;
  }

  async getEvolutionTriggerByNameOrID(id, name) {
    const result = await this.get(`evolution-trigger/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getItemByNameOrID(id, name) {
    const result = await this.get(`item/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getItemAttributeByNameOrID(id, name) {
    const result = await this.get(`item-attribute/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getItemCategoryByNameOrID(id, name) {
    const result = await this.get(`item-category/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getItemFlingEffectByNameOrID(id, name) {
    const result = await this.get(`item-fling-effect/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getItemPocketByNameOrID(id, name) {
    const result = await this.get(`item-pocket/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);
    
    return result;
  }

  async getPokemons(perPage, page) {
    const result = await this.get(`pokemon`, {
      limit: perPage,
      offset: page * perPage
    });
    
    return result;
  }
}

module.exports = PokeAPI;