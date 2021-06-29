<template>
  <h2 class="text-2xl font-semibold">Tabelle</h2>
  <h3>{{ championship.title }}</h3>
</template>

<script type="ts">
import {useFrontStore} from "@/store";

export default {
  name: 'Standings',
  setup() {
    const store = useFrontStore();

    return {
      championship: store.championship
    };
  },
};
</script>
