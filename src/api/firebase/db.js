import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from '@/api/firebase/app';

export const db = getFirestore(firebaseApp);
