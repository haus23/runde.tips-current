<template>
  <router-link v-bind="$props" custom v-slot="{ href, isActive, navigate }">
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'AppRouterLink',
  inheritAttrs: false,
  props: {
    ...RouterLink.props,
    to: [String, Object],
    inactiveClass: String,
  },
};
</script>
