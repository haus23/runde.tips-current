<template>
  <app-link v-bind="$attrs"
    class="font-semibold flex items-center"
    active-class="text-pink-500 hover:text-pink-700"
    inactive-class="text-gray-500 hover:text-gray-700"
  >
    <span class="w-6 h-6 mr-2"><component :is="icon"></component></span>
    <span class="uppercase text-sm"><slot /></span>
  </app-link>
</template>

<script>
import { defineComponent } from 'vue';
import AppLink from '../../../common/components/AppLink.vue';

export default defineComponent({
  components: { AppLink },
  props: {
    icon: {
      type: [Function]
    }
  }
})
</script>

<style>

</style>
