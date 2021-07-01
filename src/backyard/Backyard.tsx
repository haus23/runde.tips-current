import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { BackyardLayout } from './components/BackyardLayout';
import { ChampionshipList, Dashboard, PlayerList } from './pages';

export const Backyard = () => {
  let { path, url } = useRouteMatch();
  return (
    <BackyardLayout>
      <Switch>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route path={`${path}/turniere`}>
          <ChampionshipList />
        </Route>
        <Route path={`${path}/spieler`}>
          <PlayerList />
        </Route>
        <Route exact path={path}>
          <Redirect to={`${url}/dashboard`} />
        </Route>
      </Switch>
    </BackyardLayout>
  );
};
