exports.resolver = {
  MoveFlavorText: {
    flavorText: ({ flavor_text }) => flavor_text,
    versionGroup: ({ version_group }) => version_group
  }
}