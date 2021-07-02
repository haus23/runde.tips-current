import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './app';

export const auth = getAuth(app);

export const signIn = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch {
    return false;
  }
};

export const signOut = async () => {
  await auth.signOut();
};
