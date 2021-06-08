<template>
  <h2 class="text-3xl">{{ championship?.title }} - Aktuelle Tabelle</h2>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../../store';

export default defineComponent({
  name: 'FohStandings',
  setup() {
    const store = useStore();
    return {
      championship: computed(() => store.state.currentChampionship)
    };
  }
})
</script>
