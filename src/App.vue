<template>
  <app-layout>
    <foh-standings />
  </app-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppLayout from './layouts/AppLayout.vue';
import FohStandings from './views/foh/Standings.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppLayout,
    FohStandings
  }
})
</script>
