<template>
  <router-link :to="to" custom v-slot="{ href, navigate }">
    <a
      :href="href"
      @click="navigate"
      class="px-3 py-1 sm:py-0 rounded-md font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <slot />
    </a>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavLink",
  props: {
    to: [String, Object],
  },
});
</script>

<style>
</style>
