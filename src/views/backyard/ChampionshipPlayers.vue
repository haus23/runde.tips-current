<template>
  <h2 class="text-sm font-semibold uppercase">
    {{ championship.title }} - Spieler
  </h2>

  <div
    class="
      bg-blue-50
      p-2
      shadow-lg
      rounded
      text-gray-700
      mt-8
      flex
      justify-around
    "
  >
    <div>
      <h3>Turnier</h3>
      <ul>
        <li v-for="cp in championshipPlayers" :key="cp.id">
          {{ players[cp.player.id].name }}
        </li>
      </ul>
    </div>
    <div>
      <h3>Spieler</h3>
      <ul>
        <li v-for="(p, id) in players" :key="id">{{ p.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useCollection, useDictionary } from '../../api/firebase';
export default {
  setup() {
    const store = useStore();

    const championship = computed(() => store.state.backyard.championship);

    const [players] = useDictionary('players');
    const [championshipPlayers] = useCollection(
      'championships',
      championship.value.id,
      'players'
    );

    return {
      championship,
      players,
      championshipPlayers,
    };
  },
};
</script>
