<template>
  <router-link v-bind="$props" custom v-slot="{ href, navigate, isActive }">
    <a :href="href" @click="navigate" v-bind="$attrs" :class="isActive ? activeClass : inactiveClass">
      <slot />
    </a>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  props: {
    ...RouterLink.props,
    inactiveClass: String,
  }
})
</script>

<style>

</style>
