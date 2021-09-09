import { orderBy } from '@firebase/firestore';
import useSWR from 'swr';
import { collectionFetcher } from '../db/helper';
import { Championship } from '../model';

export const useChampionships = () => {
  return useSWR(
    '/championships',
    collectionFetcher<Championship>('/championships', orderBy('nr', 'desc'))
  );
};
