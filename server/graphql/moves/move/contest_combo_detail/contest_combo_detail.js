exports.resolver = {
  ContestComboDetail: {
    useBefore: ({ use_before }) => use_before,
    useAfter: ({ use_after }) => use_after
  }
}