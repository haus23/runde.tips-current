import { defineStore } from 'pinia';
import { auth } from '@/api/firebase';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoading: true,
    isAuthenticated: false,
  }),
});

auth.onAuthStateChanged((user) => {
  const store = useAuthStore();
  store.isLoading = false;
  store.isAuthenticated = user !== null;
});
