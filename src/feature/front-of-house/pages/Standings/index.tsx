import React from 'react';
import { useCurrentChampionship } from '@/api/hooks';
import { Ranking } from './components/ranking';

export function Standings() {
  const { data: championship } = useCurrentChampionship();
  return championship ? (
    <div>
      <h2 className="text-2xl font-semibold">
        {championship.title} -
        {championship.completed ? 'Abschlusstabelle' : 'Aktuelle Tabelle'}
      </h2>
      <Ranking championship={championship}></Ranking>
    </div>
  ) : null;
}
