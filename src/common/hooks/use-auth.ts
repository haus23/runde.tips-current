import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { signIn, signOut } from '../../api/firebase';

import { authState } from '../state';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const logIn = (email: string, password: string) => {
    signIn(email, password);
  };

  const logOut = () => {
    signOut();
  };

  return {
    ...auth,
    signIn,
    signOut,
  };
};
