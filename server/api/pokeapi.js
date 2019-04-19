const { RESTDataSource } = require('apollo-datasource-rest');
const MaxSenpaiUtils = require('../util/text');

class PokeAPI extends RESTDataSource {
  constructor() {
    super();
    // this.baseURL = 'https://pokeapi.co/api/v2/'; // Online Link
    this.baseURL = 'http://localhost:5080/api/v2/'; // Docker Localhost
  }

  async getEndpointByNameOrID(endpoint, id, name) {
    const result = await this.get(`${endpoint}/${MaxSenpaiUtils.getLeftOrRight(id, name) || 1}`);

    return result;
  }

  async getEndpointByID(endpoint, id) {
    const result = await this.get(`${endpoint}/${id}`);

    return result;
  }

  async getEndpointList(endpoint, perPage, page) {
    const result = await this.get(endpoint, {
      limit: perPage,
      offset: page * perPage
    });
    
    return result;
  }
}

module.exports = PokeAPI;