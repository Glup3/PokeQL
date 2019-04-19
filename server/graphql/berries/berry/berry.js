exports.resolver = {
  Query: {
    berry: (root, { id, name }, { dataSources }) => {
      return dataSources.pokeAPI.getEndpointByNameOrID('berry', id, name);
    }
  },
  Berry: {
    growthTime: ({ growth_time }) => growth_time,
    maxHarvest: ({ max_harvest }) => max_harvest,
    naturalGiftPower: ({ natural_gift_power }) => natural_gift_power,
    soilDryness: ({ soil_dryness }) => soil_dryness,
    naturalGiftType: ({ natural_gift_type }) => natural_gift_type
  }
}