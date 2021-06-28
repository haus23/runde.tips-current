<template>
  <transition
    enter-active-class="transition-opacity duration-75 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <splash-screen v-if="isLoading" />
    <component v-else :is="$route.meta.layout">
      <router-view />
    </component>
  </transition>
</template>

<script>
import { ref } from 'vue';
import SplashScreen from '@/components/SplashScreen.vue';

export default {
  components: {
    SplashScreen,
  },

  setup() {
    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);

    return {
      isLoading,
    };
  },
};
</script>
