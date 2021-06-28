import { defineStore } from 'pinia';
import { getCollection } from '@/api/firebase';

export const useFrontStore = defineStore({
  id: 'front',
  state: () => ({
    isLoading: true,
    championship: undefined,
  }),
  actions: {
    async initialize() {
      const championships = await getCollection('championships');
      this.championship = championships.sort((a, b) => b.nr - a.nr).find((c) => c.published);
      this.isLoading = false;
    },
  },
});
