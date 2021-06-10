<template>
  <h2 class="text-3xl">{{ championship.title }} - Aktuelle Tabelle</h2>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FohStandings',
  setup() {
    const store = useStore();
    return {
      championship: computed(() => store.state.currentChampionship),
    };
  },
};
</script>
