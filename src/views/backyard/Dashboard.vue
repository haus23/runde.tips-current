<template>
  <h2 class="text-sm font-semibold uppercase">Dashboard</h2>
  <div>Turnier</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    return {
      championship: computed(
        () => store.getters['backyard/currentChampionship']
      ),
    };
  },
};
</script>
