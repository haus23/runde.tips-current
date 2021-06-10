<template>
  <nav
    class="
      sm:fixed sm:left-0 sm:top-0 sm:bottom-0
      shadow-xl
      bg-white
      sm:w-40
      md:w-64
      sm:pb-4
      px-3
      sm:px-4
    "
  >
    <div class="min-h-full text-gray-800">
      <router-link v-slot="{ href, navigate }" custom to="/">
        <a
          :href="href"
          class="flex gap-x-2 h-12 leading-8 items-center"
          @click="navigate"
        >
          <img class="h-8" src="../../../assets/logo-dark.svg" alt="Logo" />
          <span class="font-semibold">runde.tips</span>
        </a>
      </router-link>
      <div class="hidden sm:block">
        <ul class="flex flex-col gap-y-2 mt-4">
          <li>
            <sidebar-link to="/hinterhof/dashboard" :icon="HomeIcon"
              >Dashboard</sidebar-link
            >
          </li>
          <li>
            <sidebar-link to="/hinterhof/turniere" :icon="ClipboardListIcon"
              >Turniere</sidebar-link
            >
          </li>
          <li>
            <sidebar-link to="/hinterhof/spieler" :icon="UsersIcon"
              >Mitspieler</sidebar-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { HomeIcon, ClipboardListIcon, UsersIcon } from '@heroicons/vue/outline';
import SidebarLink from './SidebarLink.vue';

export default {
  components: { SidebarLink },
  setup() {
    return {
      HomeIcon,
      ClipboardListIcon,
      UsersIcon,
    };
  },
};
</script>
