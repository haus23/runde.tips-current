import { defineStore } from 'pinia';
import { getCollection } from '@/api/firebase';
import { Championship } from '@/api/model';

export interface FrontState {
  isLoading: boolean;
  championship: Championship;
}

export const useFrontStore = defineStore({
  id: 'front',
  state: () =>
    ({
      isLoading: true,
      championship: {},
    } as FrontState),
  actions: {
    async initialize() {
      const championships = await getCollection<Championship>('championships');
      this.championship = championships
        .sort((a, b) => b.nr - a.nr)
        .find((c) => c.published) as Championship;
      this.isLoading = false;
    },
  },
});
