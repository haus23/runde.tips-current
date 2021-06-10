import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const championshipsRef = collection(db, 'championships');
const playersRef = collection(db, 'players');

export { db, auth, championshipsRef, playersRef };
