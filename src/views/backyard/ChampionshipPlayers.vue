<template>
  <h2 class="text-sm font-semibold uppercase">
    {{ championship.title }} - Spieler
  </h2>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db, playersRef } from '../../api/firebase';
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

    const championship = computed(() => store.state.backyard.championship);
    const championshipPlayersRef = collection(
      db,
      'championships',
      championship.value.id,
      'players'
    );
    onSnapshot(championshipPlayersRef, (qs) => {
      qs.forEach((doc) => console.log(doc.data()));
    });

    return {
      championship,
      players,
    };
  },
};
</script>
