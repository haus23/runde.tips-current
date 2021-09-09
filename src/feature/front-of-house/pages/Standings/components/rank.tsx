import React, { FC } from 'react';
import { ChampionshipPlayer, Player } from '@/api/model';
import { useModel } from '@/api/hooks';

export const Rank: FC<{ championshipPlayer: ChampionshipPlayer }> = ({
  championshipPlayer,
}) => {
  const { data: player } = useModel<Player>(championshipPlayer.playerRef);

  return (
    <li>
      {player?.name} ({championshipPlayer.points})
    </li>
  );
};
