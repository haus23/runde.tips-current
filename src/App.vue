<template>
  <transition
    enter-active-class="transition-opacity duration-75 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <splash-screen v-if="store.isLoading" />
    <component v-else :is="route.meta.layout">
      <router-view />
    </component>
  </transition>
</template>

<script>
import SplashScreen from '@/components/SplashScreen.vue';
import { useFrontStore } from '@/store';
import {useRoute} from "vue-router";

export default {
  components: {
    SplashScreen,
  },

  setup() {
    const store = useFrontStore();
    store.initialize();

    return {
      store,
      route: useRoute()
    };
  },
};
</script>
