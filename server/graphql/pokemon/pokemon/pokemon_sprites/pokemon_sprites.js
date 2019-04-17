exports.resolver = {
  PokemonSprites: {
    frontDefault: ({ front_default }) => front_default,
    frontShiny: ({ front_shiny }) => front_shiny,
    frontFemale: ({ front_female }) => front_female,
    frontShinyFemale: ({ front_shiny_female }) => front_shiny_female,
    backDefault: ({ back_default }) => back_default,
    backShiny: ({ back_shiny }) => back_shiny,
    backFemale: ({ back_female }) => back_female,
    backShinyFemale: ({ back_shiny_female }) => back_shiny_female,
  }
}