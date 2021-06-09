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
          @click="setIsOpen(true)"
          class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300"
        >
          <menu-icon class="w-6 h-6"></menu-icon>
        </button>
      </div>
    </div>
    <div class="hidden sm:flex w-full items-center ml-4 font-medium">
      <div class="flex-grow flex gap-x-1">
        <nav-link to="/tabelle">Tabelle</nav-link>
        <nav-link to="/spieler">Spieler</nav-link>
        <nav-link to="/spiele">Spiele</nav-link>
      </div>
      <div class="flex items-center gap-x-4">
        <color-scheme-switch></color-scheme-switch>
        <nav-link v-if="isAuthenticated" to="/hinterhof">Hinterhof</nav-link>
        <nav-link v-else to="/login">Log In</nav-link>
      </div>
    </div>
    <transition-root
      :show="isOpen"
      class="absolute top-0 inset-x-0 p-2 z-50"
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div
        class="rounded-lg shadow-md bg-white dark:bg-black ring-1 ring-black ring-opacity-5"
      >
        <div class="flex px-2 pt-2">
          <div class="flex flex-grow">
            <router-link to="/" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="
                  setIsOpen(false);
                  navigate($event);
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
            <color-scheme-switch @click="setIsOpen(false)"></color-scheme-switch>
            <button
              @click="setIsOpen(false)"
              class="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 dark:focus:ring-gray-300"
            >
              <x-icon class="w-6 h-6"></x-icon>
            </button>
          </div>
        </div>
        <div class="pt-2">
          <div class="flex flex-col px-2 py-2 space-y-1">
            <nav-link @navigated="setIsOpen(false)" to="/tabelle"
              >Tabelle</nav-link
            >
            <nav-link @navigated="setIsOpen(false)" to="/spieler"
              >Spieler</nav-link
            >
            <nav-link @navigated="setIsOpen(false)" to="/spiele">Spiele</nav-link>
          </div>
          <div>
            <router-link v-if="isAuthenticated" to="/hinterhof" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="
                  setIsOpen(false);
                  navigate($event);
                "
                class="rounded-b-lg font-medium py-1 block w-full text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Hinterhof</a
              >
            </router-link>
            <router-link v-else to="/login" custom v-slot="{ href, navigate }">
              <a
                :href="href"
                @click="
                  setIsOpen(false);
                  navigate($event);
                "
                class="rounded-b-lg font-medium py-1 block w-full text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                >Log In</a
              >
            </router-link>
          </div>
        </div>
      </div>
    </transition-root>
  </nav>
  <main class="container mx-auto px-4 pt-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { TransitionRoot } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import ColorSchemeSwitch from "../common/components/ColorSchemeSwitch.vue";
import NavLink from "../common/components/NavLink.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "AppLayout",
  components: { TransitionRoot, MenuIcon, XIcon, ColorSchemeSwitch, NavLink },
  setup() {
    const isOpen = ref(false);
    const store = useStore();

    return {
      isOpen,
      isAuthenticated: computed(() => store.state.isAuthenticated),
      setIsOpen(value: boolean) {
        isOpen.value = value;
      }
    }
  }
});
</script>
