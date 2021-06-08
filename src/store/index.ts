import { onSnapshot, orderBy, query } from "@firebase/firestore";
import { InjectionKey } from "vue";
import { createLogger, createStore, Store, useStore as baseUseStore } from "vuex";
import { championships } from "../api/firebase";
import { Championship } from "../api/model/championship";
import { AppState } from "./state";

const debug = process.env.NODE_ENV !== 'production';

export const storeKey: InjectionKey<Store<AppState>> = Symbol();

export const store = createStore<AppState>({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state: {
    isLoading: true,
    championships: [],
    currentChampionship: undefined
  },
  mutations: {
    setIsLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    },
    setChampionships(state, championships: Championship[]) {
      state.championships = championships;
    },
    setCurrentChampionship(state, championship: Championship) {
      state.currentChampionship = championship;    }
  },
  actions: {
    fetchInitialData({ commit, dispatch }) {
       const q = query(championships, orderBy('nr', 'desc'));
       onSnapshot(q, qs => {
         const allChampionships: Championship[] = qs.docs.map( doc => ({
           id: doc.id,
           ...doc.data()
         }));
         commit('setChampionships', allChampionships);
         dispatch('prepareFohData');
       });
    },
    async prepareFohData({ commit, dispatch, state }) {
      commit('setIsLoading', true);
      const current = state.championships.find(c => c.published);
      commit('setCurrentChampionship', current);
      commit('setIsLoading', false);
    }
  }
});

export function useStore(): Store<AppState> {
  return baseUseStore(storeKey);
}
