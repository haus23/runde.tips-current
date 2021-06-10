<template>
<div>
  <backyard-sidebar></backyard-sidebar>
  <slot />
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackyardSidebar from '../modules/backyard/components/Sidebar.vue';

export default defineComponent({
  components: { BackyardSidebar }
})
</script>
