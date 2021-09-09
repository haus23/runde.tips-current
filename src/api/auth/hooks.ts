import {
  signInWithEmailAndPassword,
  signOut as signOutFromFirebase,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth as firebaseAuth } from '../firebase';

import { authState } from './state';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  // Subscribe to firebase auth
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuth({
        isAuthenticating: false,
        authenticated: user !== null,
        user: user ? { email: user.email } : null,
      });
    });
  }, [setAuth]);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      return true;
    } catch {
      return false;
    }
  };

  const signOut = async () => {
    return signOutFromFirebase(firebaseAuth);
  };

  return {
    ...auth,
    signIn,
    signOut,
  };
};
