<template>
  <h2 class="text-sm font-semibold uppercase">
    {{ championship.title }} - Spieler
  </h2>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { onSnapshot, orderBy, query } from '@firebase/firestore';
import { playersRef } from '../../api/firebase';
export default {
  setup() {
    const store = useStore();

    const players = ref([]);
    const playersQuery = query(playersRef, orderBy('name', 'asc'));
    onSnapshot(playersQuery, (snapshot) => {
      players.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return {
      championship: computed(
        () => store.getters['backyard/currentChampionship']
      ),
      players,
    };
  },
};
</script>
