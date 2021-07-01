import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <nav className="flex gap-x-2">
        <Link to="/">Home</Link>
        <Link to="/tabelle">Tabelle</Link>
        <Link to="/spieler">Spieler</Link>
        <Link to="/spiele">Spiele</Link>
        <Link to="/login">Log In</Link>
        <Link to="/hinterhof">Hinterhof</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};
