<template>
  <transition-root :show="isLoading"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-300"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <splash-screen></splash-screen>
  </transition-root>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { TransitionRoot } from '@headlessui/vue';
import AppLayout from './layouts/AppLayout.vue';
import SplashScreen from './common/components/SplashScreen.vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
    TransitionRoot,
    SplashScreen
  },
  setup() {
    const store = useStore();

    setTimeout(() => {
      store.dispatch('fetchInitialData');
    }, 3000);

    return {
      isLoading: computed(() => store.state.isLoading)
    }
  }
})
</script>
