import { onSnapshot, orderBy, query } from '@firebase/firestore';
import { createLogger, createStore } from 'vuex';
import { championshipsRef } from '../api/firebase';
import moduleBackyard from './backyard';

const debug = process.env.NODE_ENV !== 'production';

const store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  modules: {
    backyard: moduleBackyard,
  },
  state: {
    isAuthenticated: false,
    isLoading: true,
    championships: [],
    currentChampionship: undefined,
  },
  mutations: {
    signIn(state) {
      state.isAuthenticated = true;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setChampionships(state, championships) {
      state.championships = championships;
    },
    setCurrentChampionship(state, championship) {
      state.currentChampionship = championship;
    },
  },
  actions: {
    fetchInitialData({ commit, dispatch }) {
      const q = query(championshipsRef, orderBy('nr', 'desc'));
      onSnapshot(q, (qs) => {
        const allChampionships = qs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit('setChampionships', allChampionships);
        dispatch('prepareFohData');
      });
    },
    async prepareFohData({ commit, state }) {
      commit('setIsLoading', true);
      const current = state.championships.find((c) => c.published);
      commit('setCurrentChampionship', current);
      commit('setIsLoading', false);
    },
  },
});

export default store;
