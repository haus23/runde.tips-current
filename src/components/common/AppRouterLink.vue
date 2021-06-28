<template>
  <router-link :to="to" custom v-slot="{ href, isActive, navigate }">
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

<script setup type="ts">
import {defineProps} from "vue";

defineProps({
  to: [Object, String],
  activeClass: String,
  inactiveClass: String,
})
</script>
