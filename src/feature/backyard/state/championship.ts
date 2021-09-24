import { atom } from 'recoil';
import { Championship } from '@/api/model';

export const championshipState = atom<Championship | undefined>({
  key: 'backyardChampionship',
  default: undefined,
});
