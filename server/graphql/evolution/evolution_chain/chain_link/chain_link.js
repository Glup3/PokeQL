exports.resolver = {
  ChainLink: {
    isBaby: ({ is_baby }) => is_baby,
    evolutionDetails: ({ evolution_details }) => evolution_details,
    evolvesTo: ({ evolves_to }) => evolves_to
  }
}