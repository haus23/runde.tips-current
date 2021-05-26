<template>
  <nav class="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 h-12 leading-8 flex items-center px-2 sm:px-4 gap-x-2 sm:gap-x-4">
    <div class="flex-grow">
      <a href="/" class="flex gap-x-2 text-gray-800 dark:text-gray-50">
        <img class="w-8 h-8 dark:hidden" src="../assets/logo-dark.svg" alt="Logo">
        <img class="w-8 h-8 hidden dark:block" src="../assets/logo.svg" alt="Logo">
        <span>runde.tips</span>
      </a>
    </div>
    <div>
      <color-scheme-switch></color-scheme-switch>
    </div>
  </nav>
  <main class="container mx-auto px-4 pt-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorSchemeSwitch from "../common/components/ColorSchemeSwitch.vue";

export default defineComponent({
  name: 'AppLayout',
  components: {ColorSchemeSwitch}
})
</script>
