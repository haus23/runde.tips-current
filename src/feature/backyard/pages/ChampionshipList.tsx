import { useChampionships } from '@/api/hooks';
import React from 'react';

export function ChampionshipList() {
  const { data: championships } = useChampionships();
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Turniere</h2>
      </div>
      <ul>
        {championships?.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </>
  );
}
