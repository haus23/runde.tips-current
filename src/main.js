// The Styles
import './styles.css';

// The App
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Firebase
import { auth } from './api/firebase';
auth.onAuthStateChanged(user => {
  store.dispatch('fetchInitialData');
  if (user) {
    store.commit('signIn');
  }
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
