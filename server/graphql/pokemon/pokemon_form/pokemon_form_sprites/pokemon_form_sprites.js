exports.resolver = {
  PokemonFormSprites: {
    frontDefault: ({ front_default }) => front_default,
    frontShiny: ({ front_shiny }) => front_shiny,
    backDefault: ({ back_default }) => back_default,
    backShiny: ({ back_shiny }) => back_shiny
  }
}