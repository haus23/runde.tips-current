<template>
  <h2 class="text-3xl">{{ championship?.title }} - Aktuelle Tabelle</h2>
</template>

<script lang="ts">
import { DocumentData, getDocs, orderBy, query } from '@firebase/firestore';
import { defineComponent, ref } from 'vue'
import { championships  } from '../../api/firebase';

export default defineComponent({
  name: 'FohStandings',
  setup() {
    const championship = ref<DocumentData | undefined>(undefined);
    const q = query(championships, orderBy('nr', 'desc'));
    getDocs(q).then(qs => {
      championship.value = qs.docs.find(d => d.data().published)?.data();
    });

    return {
      championship
    };
  }
})
</script>
