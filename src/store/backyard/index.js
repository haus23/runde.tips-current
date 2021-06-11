const moduleBackyard = {
  namespaced: true,
  state: () => ({
    championship: null,
  }),
  mutations: {
    setChampionship(state, championship) {
      state.championship = championship;
    },
  },
  actions: {
    initialize({ state, commit, rootState }) {
      if (state.championship === null) {
        commit('setChampionship', rootState.championships[0]);
      }
    },
  },
  getters: {},
};

export default moduleBackyard;
