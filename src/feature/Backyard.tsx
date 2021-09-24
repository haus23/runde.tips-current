import { useChampionships } from '@/api/hooks';
import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { championshipState } from './backyard/state/championship';

import { BackyardLayout } from './backyard/components/BackyardLayout';
import {
  ChampionshipList,
  Dashboard,
  PlayerList,
  LogOut,
  ChampionshipPlayers,
} from './backyard/pages';

export const Backyard = () => {
  const { path, url } = useRouteMatch();

  /*
  const { data: championships } = useChampionships();
  const [championship, setChampionship] = useRecoilState(championshipState);

  if (!championship && championships) {
    setChampionship(championships[0]);
  }
*/

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
        <Route path={`${path}/turnierspieler`}>
          <ChampionshipPlayers />
        </Route>
        <Route path={`${path}/logout`}>
          <LogOut />
        </Route>
        <Route exact path={path}>
          <Redirect to={`${url}/dashboard`} />
        </Route>
      </Switch>
    </BackyardLayout>
  );
};
