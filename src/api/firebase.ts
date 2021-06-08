import { initializeApp } from "firebase/app";
import { collection, CollectionReference, getFirestore } from "firebase/firestore";
import { ChampionshipData } from "./model/championship";

const firebaseApp = initializeApp({
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  apiKey: import.meta.env.VITE_FP_API_KEY
});

const db = getFirestore(firebaseApp);

const championships = collection(db, 'championships') as CollectionReference<ChampionshipData>;

export {
  db,
  championships
};
