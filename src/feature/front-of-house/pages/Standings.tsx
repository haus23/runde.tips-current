import React from 'react';
import { useFohData } from '../../../common/hooks';

export function Standings() {
  const { championship } = useFohData();

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        {championship?.title} -
        {championship?.completed ? 'Abschlusstabelle' : 'Aktuelle Tabelle'}
      </h2>
    </div>
  );
}
