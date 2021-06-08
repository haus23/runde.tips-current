// The Styles
import './styles.css';
import './services/color-scheme-service';

// The App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Firebase
import './api/firebase';

// Store
import { store, storeKey } from './store';

createApp(App)
  .use(router)
  .use(store, storeKey)
  .mount('#app')
