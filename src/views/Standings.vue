<template>
  <h2 class="text-2xl font-semibold">Tabelle</h2>
  <h3>{{ championship?.title }}</h3>
</template>

<script>
import {onUnmounted, ref} from "vue";
import {db} from "@/api/firebase";
import { collection, onSnapshot } from "firebase/firestore";


export default {
  name: 'Standings',
  setup() {
    const championship = ref(null);

    const collectionRef = collection(db, 'championships');

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      championship.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0];
    });

    onUnmounted(() => {
      unsubscribe();
    });

    return {
      championship
    }
  }
}
</script>
