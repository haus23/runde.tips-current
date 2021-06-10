const moduleBackyard = {
  namespaced: true,
  state: () => ({
    currentChampionship: null,
  }),
  mutations: {},
  actions: {},
  getters: {
    currentChampionship(state, getters, rootState) {
      return state.currentChampionship ?? rootState.championships[0];
    },
  },
};

export default moduleBackyard;
