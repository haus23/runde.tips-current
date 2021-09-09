import { where, orderBy } from 'firebase/firestore';
import useSWR from 'swr';
import { firstOfcollectionFetcher } from '../db/helper';
import { Championship } from '@/api/model';

export const useCurrentChampionship = () => {
  return useSWR(
    '/championships/current',
    firstOfcollectionFetcher<Championship>(
      '/championships',
      where('published', '==', true),
      orderBy('nr', 'desc')
    )
  );
};
