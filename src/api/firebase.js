import { initializeApp } from 'firebase/app';
import { collection, getFirestore, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { onUnmounted, ref } from 'vue';

const firebaseApp = initializeApp({
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const championshipsRef = collection(db, 'championships');
const playersRef = collection(db, 'players');

function useCollection(...path) {
  const data = ref([]);
  const collectionRef = collection(db, path.join('/'));

  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    data.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return [data];
}

function useDictionary(...path) {
  const data = ref({});
  const collectionRef = collection(db, path.join('/'));

  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const dictionary = {};
    snapshot.forEach((doc) => {
      dictionary[doc.id] = doc.data();
    });
    data.value = dictionary;
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return [data];
}

export { db, auth, championshipsRef, playersRef, useCollection, useDictionary };
