import { atom } from 'recoil';

export const authState = atom<{
  isAuthenticating: boolean;
  authenticated: boolean;
  user: {
    email: string | null;
  } | null;
}>({
  key: 'auth',
  default: {
    isAuthenticating: true,
    authenticated: false,
    user: null,
  },
});
