import { onUnmounted, ref } from 'vue';
import { getDocs, getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { firebaseApp } from '@/api/firebase/app';

export const db = getFirestore(firebaseApp);

// Helper
export async function getCollection(...path) {
  const collectionRef = collection(db, path.join('/'));
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Composition utilities
export function useCollection(...path) {
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
