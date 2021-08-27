import { atom } from 'recoil';
import { Championship } from '../../api/model';

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

export const fohState = atom<{
  isLoading: boolean;
  championship?: Championship;
}>({
  key: 'foh',
  default: {
    isLoading: true,
    championship: undefined,
  },
});
