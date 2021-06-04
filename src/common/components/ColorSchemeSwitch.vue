<template>
  <div class="flex">
    <button @click="enableDarkMode(true)" class="dark:hidden flex justify-center items-center p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300">
      <MoonIcon class="h-6 w-6 " />
    </button>
    <button @click="enableDarkMode(false)" class="hidden dark:flex text-yellow-300 justify-center items-center p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300">
      <SunIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MoonIcon, SunIcon} from '@heroicons/vue/outline';
import colorSchemeService from '../../services/color-scheme-service';

export default defineComponent({
  name: "ColorSchemeSwitch",
  components: {
    MoonIcon,
    SunIcon
  },
  emits: ['click'],
  methods: {
    enableDarkMode(enabled: boolean) {
      colorSchemeService.setDarkMode(enabled);
      this.$emit('click');
    }
  }
})
</script>
