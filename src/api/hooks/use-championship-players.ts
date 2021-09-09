import useSWR from 'swr';
import { collectionFetcher } from '../db/helper';
import { ChampionshipPlayer } from '../model';

export const useChampionshipPlayers = (championshipId: string) => {
  const source = ['/championships', championshipId, 'players'].join('/');
  return useSWR(source, collectionFetcher<ChampionshipPlayer>(source));
};
