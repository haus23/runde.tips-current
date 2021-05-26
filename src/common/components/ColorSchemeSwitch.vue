<template>
  <div class="flex">
    <button @click="enableDarkMode(true)" class="dark:hidden h-6 w-6 flex justify-center items-center focus:outline-none">
      <MoonIcon />
    </button>
    <button @click="enableDarkMode(false)" class="hidden dark:block text-yellow-300  h-6 w-6 flex justify-center items-center focus:outline-none">
      <SunIcon />
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
  methods: {
    enableDarkMode(enabled: boolean) {
      colorSchemeService.setDarkMode((enabled));
    }
  }
})
</script>
