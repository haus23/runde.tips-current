import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { BackyardLayout } from './backyard/components/BackyardLayout';
import { ChampionshipList, Dashboard, PlayerList } from './backyard/pages';

export const Backyard = () => {
  const { path, url } = useRouteMatch();

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
