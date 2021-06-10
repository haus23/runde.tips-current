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
  <h2 class="p-8 text-2xl font-semibold">runde.tips</h2>
</template>

<script>
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import SplashScreen from './common/components/SplashScreen.vue';

export default {
  name: 'App',
  components: {
    TransitionRoot,
    SplashScreen
  },
  setup() {
    const isLoading = ref(true);

    setTimeout(() => {
      isLoading.value = false;
    }, 3000);

    return {
      isLoading
    }
  }
}
</script>
