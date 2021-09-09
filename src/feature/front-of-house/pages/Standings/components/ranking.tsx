import React, { FC } from 'react';
import { Championship } from '@/api/model';
import { Rank } from './rank';
import { useChampionshipPlayers } from '@/api/hooks';

export const Ranking: FC<{ championship: Championship }> = ({
  championship,
}) => {
  const { data: players } = useChampionshipPlayers(championship.id);

  return (
    <ul>
      {players
        ?.sort((a, b) => b.points - a.points)
        .map((p) => (
          <Rank key={p.id} championshipPlayer={p}></Rank>
        ))}
    </ul>
  );
};
