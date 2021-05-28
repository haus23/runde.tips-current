<template>
  <nav class="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 h-12 leading-8 flex items-center px-2 sm:px-4 gap-x-2 sm:gap-x-4">
    <div class="flex flex-grow items-center">
      <div class="flex flex-grow">
        <a href="/" class="flex gap-x-2 text-gray-800 dark:text-gray-50">
          <img class="w-8 h-8 dark:hidden" src="../assets/logo-dark.svg" alt="Logo">
          <img class="w-8 h-8 hidden dark:block" src="../assets/logo.svg" alt="Logo">
          <span>runde.tips</span>
        </a>
      </div>
      <div class="flex items-center sm:hidden">
        <button>
          <menu-icon class="w-6 h-6"></menu-icon>
        </button>
      </div>
    </div>
    <div class="hidden sm:flex w-full items-center">
      <div>
        <a href="/tabelle">Tabelle</a>
        <a href="/tabelle">Spieler</a>
        <a href="/tabelle">Spiele</a>
      </div>
      <color-scheme-switch></color-scheme-switch>
    </div>
  </nav>
  <main class="container mx-auto px-4 pt-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MenuIcon } from '@heroicons/vue/outline';
import ColorSchemeSwitch from "../common/components/ColorSchemeSwitch.vue";

export default defineComponent({
  name: 'AppLayout',
  components: {
    ColorSchemeSwitch,
    MenuIcon
  }
})
</script>
