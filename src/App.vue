<template>
  <transition
    enter-active-class="transition-opacity duration-75 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <splash-screen v-if="auth.isLoading || store.isLoading" />
    <component v-else :is="route.meta.layout">
      <router-view />
    </component>
  </transition>
</template>

<script>
import SplashScreen from '@/components/SplashScreen.vue';
import {useRoute} from "vue-router";
import {useAuthStore, useFrontStore} from "./store";

export default {
  components: {
    SplashScreen,
  },

  setup() {
    const auth = useAuthStore();
    const store = useFrontStore();
    store.initialize();

    return {
      auth,
      store,
      route: useRoute()
    };
  },
};
</script>
