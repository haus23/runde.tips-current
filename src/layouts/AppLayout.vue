<template>
  <nav class="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 h-12 leading-8 flex items-center px-2 sm:px-4 gap-x-2 sm:gap-x-4">
    <div class="flex flex-grow items-center">
      <div class="flex flex-grow">
        <a href="/" class="flex gap-x-2 text-black dark:text-white">
          <img class="w-8 h-8 dark:hidden" src="../assets/logo-dark.svg" alt="Logo">
          <img class="w-8 h-8 hidden dark:block" src="../assets/logo.svg" alt="Logo">
          <span>runde.tips</span>
        </a>
      </div>
      <div class="flex items-center sm:hidden">
        <button class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300">
          <menu-icon class="w-6 h-6"></menu-icon>
        </button>
      </div>
    </div>
    <div class="hidden sm:flex w-full items-center ml-4">
      <div class="flex-grow flex gap-x-2">
        <a href="/tabelle">Tabelle</a>
        <a href="/spieler">Spieler</a>
        <a href="/spiele">Spiele</a>
      </div>
      <div class="flex items-center gap-x-4">
        <color-scheme-switch></color-scheme-switch>
        <a href="/login">Log In</a>
      </div>
    </div>
    <div class="sm:hidden absolute top-0 inset-x-0 p-2">
      <div class="px-4 py-2 bg-white rounded-lg shadow-md">
        <div class="flex flex-col">
          <a href="/tabelle">Tabelle</a>
          <a href="/spieler">Spieler</a>
          <a href="/spiele">Spiele</a>
        </div>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 pt-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import ColorSchemeSwitch from "../common/components/ColorSchemeSwitch.vue";

export default defineComponent({
  name: 'AppLayout',
  components: {
    ColorSchemeSwitch,
    MenuIcon,
    XIcon
  }
})
</script>
