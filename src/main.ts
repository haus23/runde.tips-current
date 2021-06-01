// The Styles
import './styles.css';
import './services/color-scheme-service';

// The App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

createApp(App)
  .use(router)
  .mount('#app')
