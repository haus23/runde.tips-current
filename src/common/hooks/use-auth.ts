import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { auth as firebaseAuth } from '../../api/firebase';

import { authState } from '../state';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuth({
        isAuthenticating: false,
        authenticated: user !== null,
        user: user ? { email: user.email } : null,
      });
    });
  }, [setAuth]);

  return auth;
};
