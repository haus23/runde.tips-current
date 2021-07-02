import React, { FC } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const BackyardLayout: FC = ({ children }) => {
  let { url } = useRouteMatch();

  return (
    <div>
      <h2>Hinterhof</h2>
      <nav className="flex gap-x-2">
        <Link to="/">Front</Link>
        <Link to={`${url}/dashboard`}>Dashboard</Link>
        <Link to={`${url}/turniere`}>Turniere</Link>
        <Link to={`${url}/spieler`}>Spieler</Link>
        <Link to={`${url}/logout`}>Log Out</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};
