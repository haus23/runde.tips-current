<template>
  <nav
    class="bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 h-12 leading-8 flex items-center px-3 sm:px-4 gap-x-2 sm:gap-x-4"
  >
    <div class="flex flex-grow items-center">
      <div class="flex flex-grow">
        <router-link to="/" custom v-slot="{ href, navigate }">
          <a
            :href="href"
            @click="navigate"
            class="font-medium flex gap-x-2 text-black dark:text-white"
          >
            <img
              class="w-8 h-8 dark:hidden"
              src="../assets/logo-dark.svg"
              alt="Logo"
            />
            <img
              class="w-8 h-8 hidden dark:block"
              src="../assets/logo.svg"
              alt="Logo"
            />
            <span>runde.tips</span>
          </a>
        </router-link>
      </div>
      <div class="flex items-center sm:hidden">
        <button
          @click="setOpen(true)"
          class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300"
        >
          <menu-icon class="w-6 h-6"></menu-icon>
        </button>
      </div>
    </div>
    <div class="hidden sm:flex w-full items-center ml-4 font-medium">
      <div class="flex-grow flex gap-x-2">
        <router-link to="/tabelle">Tabelle</router-link>
        <router-link to="/spieler">Spieler</router-link>
        <router-link to="/spiele">Spiele</router-link>
      </div>
      <div class="flex items-center gap-x-4">
        <color-scheme-switch></color-scheme-switch>
        <router-link to="/login">Log In</router-link>
      </div>
    </div>
    <div :class="{ hidden: !open }" class="absolute top-0 inset-x-0 p-2">
      <div
        class="rounded-lg shadow-md bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
      >
        <div class="flex px-2 pt-2">
          <div class="flex flex-grow">
            <router-link to="/" custom v-slot="{ href, route, navigate }">
              <a
                :href="href"
                @click="
                  setOpen(false);
                  navigate(route);
                "
                class="flex gap-x-2 text-black dark:text-white font-medium"
              >
                <img
                  class="w-8 h-8 dark:hidden"
                  src="../assets/logo-dark.svg"
                  alt="Logo"
                />
                <img
                  class="w-8 h-8 hidden dark:block"
                  src="../assets/logo.svg"
                  alt="Logo"
                />
                <span>runde.tips</span>
              </a>
            </router-link>
          </div>
          <div class="flex">
            <color-scheme-switch></color-scheme-switch>
            <button
              @click="setOpen(false)"
              class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300"
            >
              <x-icon class="w-6 h-6"></x-icon>
            </button>
          </div>
        </div>
        <div class="pt-2">
          <div class="flex flex-col px-2 py-2 space-y-1">
            <router-link to="/tabelle" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="navigate"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >Tabelle</a
              >
            </router-link>
            <router-link to="/spieler" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="navigate"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >Spieler</a
              >
            </router-link>
            <router-link to="/spiele" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="navigate"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                >Spiele</a
              >
            </router-link>
          </div>
          <div class="rounded-b-lg">
            <router-link to="/spiele" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="navigate"
                class="rounded-b-lg font-medium py-1 block w-full text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Log In</a
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <main class="container mx-auto px-4 pt-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import ColorSchemeSwitch from "../common/components/ColorSchemeSwitch.vue";

export default defineComponent({
  name: "AppLayout",
  data: () => {
    return {
      open: false,
    };
  },
  methods: {
    setOpen(state: boolean): void {
      this.open = state;
    },
  },
  components: {
    ColorSchemeSwitch,
    MenuIcon,
    XIcon,
  },
});
</script>
