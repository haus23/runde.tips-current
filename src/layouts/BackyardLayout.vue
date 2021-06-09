<template>
<div>
  <backyard-sidebar></backyard-sidebar>
  <div class="text-white bg-pink-600 min-h-screen sm:ml-40 md:ml-64 px-8 pt-3">
    <slot />
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackyardSidebar from '../modules/backyard/components/Sidebar.vue';

export default defineComponent({
  components: { BackyardSidebar }
})
</script>
