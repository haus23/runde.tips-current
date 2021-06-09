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
  <component :is="$route.meta.layout">
    <router-view></router-view>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { TransitionRoot } from '@headlessui/vue';
import SplashScreen from './common/components/SplashScreen.vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    TransitionRoot,
    SplashScreen
  },
  setup() {
    const store = useStore();

    return {
      isLoading: computed(() => store.state.isLoading)
    }
  }
})
</script>
