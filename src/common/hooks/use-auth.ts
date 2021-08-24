import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth as firebaseAuth, signIn, signOut } from '../../api/firebase';

import { authState } from '../state';

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

  const logIn = (email: string, password: string) => {
    return signIn(email, password);
  };

  const logOut = () => {
    return signOut();
  };

  return {
    ...auth,
    logIn,
    logOut,
  };
};
