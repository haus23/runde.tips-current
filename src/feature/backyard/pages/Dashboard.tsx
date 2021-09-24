import React from 'react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>
      <ul>
        <li>
          <Link to="turnierspieler">Turnierspieler</Link>
        </li>
      </ul>
    </>
  );
}
