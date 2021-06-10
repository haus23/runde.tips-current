<template>
  <h2 class="text-sm font-semibold uppercase">Turniere</h2>
  <div class="bg-blue-50 p-2 shadow-lg rounded text-gray-700 mt-8">
    <table class="w-full">
      <thead>
        <tr>
          <th>Nummer</th>
          <th class="text-left">Titel</th>
          <th class="text-left hidden md:table-cell">Slug</th>
          <th>Veröffentlicht</th>
          <th>Abgeschlossen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in championships" :key="c.id">
          <td class="text-center">{{ c.nr }}</td>
          <td>{{ c.title }}</td>
          <td class="hidden md:table-cell">{{ c.slug }}</td>
          <td class="text-center">
            <input type="checkbox" :checked="c.published" />
          </td>
          <td class="text-center">
            <input type="checkbox" :checked="c.completed" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    return {
      championships: computed(() => store.state.championships),
    };
  },
};
</script>
