import { getAuth } from 'firebase/auth';
import { firebaseApp } from '@/api/firebase/app';

export const auth = getAuth(firebaseApp);
