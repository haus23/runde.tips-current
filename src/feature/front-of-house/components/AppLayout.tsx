import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../common/hooks';

export const AppLayout: FC = ({ children }) => {
  const { authenticated } = useAuth();
  return (
    <div>
      <nav className="flex gap-x-2">
        <Link to="/">Home</Link>
        <Link to="/tabelle">Tabelle</Link>
        <Link to="/spieler">Spieler</Link>
        <Link to="/spiele">Spiele</Link>
        {authenticated ? (
          <Link to="/hinterhof">Hinterhof</Link>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};
