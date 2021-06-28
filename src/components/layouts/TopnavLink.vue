<template>
  <app-router-link
    v-bind="$attrs"
    class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    active-class="border-indigo-500 text-gray-900"
    inactive-class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
  >
    <slot />
  </app-router-link>
</template>

<script>
import AppRouterLink from '@/components/common/AppRouterLink.vue';
export default {
  name: 'TopnavLink',
  inheritAttrs: false,
  components: { AppRouterLink },
};
</script>
