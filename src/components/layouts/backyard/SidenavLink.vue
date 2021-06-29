<template>
  <app-router-link v-slot:default="{ isActive }"
    v-bind="$attrs"
    class="group flex items-center px-2 py-2 text-base font-medium rounded-md"
    active-class="bg-gray-100 text-gray-900"
    inactive-class="text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  >
    <component :is="icon" :class="[isActive ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
    <slot />
  </app-router-link>
</template>

<script type="ts">

import AppRouterLink from "@/components/common/AppRouterLink.vue";
export default {
  name: "SidenavLink",
  inheritAttrs: false,
  components: {AppRouterLink},
  props: {
    icon: Function
  },
  setup(props) {
    const { icon } = props;

    return {
      icon
    }
  }
}
</script>

