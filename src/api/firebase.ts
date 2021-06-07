import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  apiKey: import.meta.env.VITE_FP_API_KEY
});

const db = getFirestore(firebaseApp);

const championships = collection(db, 'championships');

export {
  db,
  championships
};
