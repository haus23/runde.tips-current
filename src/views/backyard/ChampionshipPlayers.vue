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
      <h3 class="uppercase font-semibold mb-2">Turnier</h3>
      <ul>
        <li v-for="cp in championshipPlayers" :key="cp.id">
          {{ players[cp.player.id].name }}
        </li>
      </ul>
    </div>
    <div>
      <h3 class="uppercase font-semibold mb-2">Spieler</h3>
      <ul>
        <li v-for="(p, id) in players" :key="id">{{ p.name }}</li>
      </ul>
    </div>
    <div>
      <button
        class="
          bg-indigo-500
          text-white
          active:bg-indigo-600
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          mr-1
          mb-1
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        @click="isOpen = true"
      >
        Neu ...
      </button>
    </div>
  </div>
  <app-dialog :show="isOpen"></app-dialog>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useCollection, useDictionary } from '../../api/firebase';
import AppDialog from '../../common/components/AppDialog.vue';

export default {
  components: { AppDialog },
  setup() {
    const isOpen = ref(false);
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
      isOpen,
    };
  },
};
</script>
