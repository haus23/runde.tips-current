<template>
  <nav class="sm:fixed sm:left-0 sm:top-0 sm:bottom-0 shadow-xl bg-white sm:w-40 md:w-64 sm:pb-4 px-3 sm:px-4">
    <div class="min-h-full text-gray-800">
      <router-link to="/" custom v-slot="{ href, navigate }">
        <a :href="href" @click="navigate"
          class="flex gap-x-2 h-12 leading-8 items-center"
        >
          <img class="h-8" src="../../../assets/logo-dark.svg" alt="Logo">
          <span class="font-semibold">runde.tips</span>
        </a>
      </router-link>
      <div class="hidden sm:block">
        <ul class="flex flex-col gap-y-2 mt-4">
          <li>
            <sidebar-link to="/hinterhof" :icon="HomeIcon">Dashboard</sidebar-link>
          </li>
          <li>
            <sidebar-link to="/hinterhof/turniere" :icon="ClipboardListIcon">Turniere</sidebar-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HomeIcon, ClipboardListIcon } from '@heroicons/vue/outline'
import SidebarLink from './SidebarLink.vue';

export default defineComponent({
  components: { SidebarLink },
  setup() {
    return {
      HomeIcon, ClipboardListIcon
    }
  }
})
</script>
