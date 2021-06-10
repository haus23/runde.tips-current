<template>
  <router-link :to="to" custom v-slot="{ href, navigate, isActive }">
    <a
      :href="href"
      @click="navigate($event); $emit('navigated')"
      :class="isActive ? 'text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-800' : 'text-gray-600 dark:text-gray-400'"
      class="px-3 py-1 sm:py-0 rounded-md font-medium hover:text-black dark:hover:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: [String, Object],
  },
  emits: ['navigated']
};
</script>
