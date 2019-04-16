const { ApolloServer, gql } = require('apollo-server-express');
const PokeAPI = require('../api/pokeapi');

const typeDefs = gql`
  type Query {
    pokemon(id: Int, name: String): Pokemon
    pokemons: [Pokemon]
  }

  type Pokemon {
    id: Int!
    name: String
    baseExperience: Int
    height: Int
    isDefault: Boolean
    order: Int
    weight: Int
    abilities: [Ability]
    forms: [NamedAPIResource]
    gameIndices: [VersionGameIndex]
    heldItems: [PokemonHeldItems]
    locationAreaEncounters: String
    moves: [PokemonMove]
    sprites: PokemonSprites
    species: NamedAPIResource
    stats: [PokemonStat]
    types: [PokemonType]
  }

  type PokemonType {
    slot: Int
    type: NamedAPIResource
  }

  type PokemonStat {
    stat: NamedAPIResource
    effort: Int
    baseStat: Int
  }

  type PokemonSprites {
    frontDefault: String
    frontShiny: String
    frontFemale: String
    frontShinyFemale: String
    backDefault: String
    backShiny: String
    backFemale: String
    backShinyFemale: String
  }

  type PokemonMove {
    move: NamedAPIResource
    versionGroupDetails: [PokemonMoveVersion]
  }

  type PokemonMoveVersion {
    moveLearnMethod: NamedAPIResource
    versionGroup: NamedAPIResource
    levelLearnedAt: Int
  }

  type PokemonHeldItems {
    item: NamedAPIResource
    versionDetails: [PokemonHeldItemVersion]
  }

  type PokemonHeldItemVersion {
    version: NamedAPIResource
    rarity: Int
  }

  type Ability {
    isHidden: Boolean
    slot: Int
    ability: NamedAPIResource
  }

  type VersionGameIndex {
    gameIndex: Int
    version: Version
  }

  type Version {
    id: Int
    name: String
    names: [Name]
    versionGroup: NamedAPIResource
  }

  type NamedAPIResource {
    name: String
    url: String
  }

  type Name {
    name: String
    language: Language
  }

  type Language {
    id: Int!
    name: String
    official: Boolean
    iso639: String
    iso3166: String
    names: [Name]
  }
`;

const resolvers = {
  Query: {
    pokemons: (root, args, context, info) => {
      return null;
    },
    pokemon: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonByNameOrID(id, name);
    }
  },
  Pokemon: {
    isDefault: ({ is_default }) => is_default,
    gameIndices: ({ game_indices }) => game_indices,
    heldItems: ({ held_items }) => held_items,
    locationAreaEncounters: ({ location_area_encounters }) => location_area_encounters
  },
  PokemonHeldItems: {
    versionDetails: ({ version_details }) => version_details
  },
  PokemonMove: {
    versionGroupDetails: ({ version_group_details}) => version_group_details
  },
  PokemonMoveVersion: {
    moveLearnMethod: ({ move_learn_method }) => move_learn_method,
    versionGroup: ({ version_group }) => version_group,
    levelLearnedAt: ({ level_learned_at }) => level_learned_at,
  },
  PokemonSprites: {
    frontDefault: ({ front_default }) => front_default,
    frontShiny: ({ front_shiny }) => front_shiny,
    frontFemale: ({ front_female }) => front_female,
    frontShinyFemale: ({ front_shiny_female }) => front_shiny_female,
    backDefault: ({ back_default }) => back_default,
    backShiny: ({ back_shiny }) => back_shiny,
    backFemale: ({ back_female }) => back_female,
    backShinyFemale: ({ back_shiny_female }) => back_shiny_female,
  },
  PokemonStat: {
    baseStat: ({ base_stat }) => base_stat
  }
}

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql'
  },
  dataSources: () => ({
    pokeAPI: new PokeAPI()
  })
});

module.exports = schema;