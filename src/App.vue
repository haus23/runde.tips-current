<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLayout from './layouts/AppLayout.vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout
  },
  setup() {
    useStore().dispatch('fetchInitialData');
  }
})
</script>
