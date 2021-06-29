import { collection, getDocs, getFirestore, CollectionReference } from 'firebase/firestore';
import { firebaseApp } from '@/api/firebase/app';

export const db = getFirestore(firebaseApp);

// Helper
export async function getCollection<T>(...path: string[]): Promise<T[]> {
  const collectionRef: CollectionReference = collection(db, path.join('/'));
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }));
}

/*

// Composition utilities
export function useCollection(...path: string[]) {
  const data = ref<any[]>([]);

  const collectionRef = collection(db, path.join('/'));
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    data.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  onUnmounted(() => {
    unsubscribe();
  });

  return [data];
}
*/
