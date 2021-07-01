import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../state';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    setTimeout(() => {
      setAuth({ isAuthenticating: false });
    }, 500);
  }, [setAuth]);

  return auth;
};
