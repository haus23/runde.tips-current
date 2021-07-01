import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppLayout } from './front-of-house/components/AppLayout';
import { LogIn, Matches, Players, Standings } from './front-of-house/pages';

export const FrontOfHouse = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/tabelle">
          <Standings />
        </Route>
        <Route path="/spieler">
          <Players />
        </Route>
        <Route path="/spiele">
          <Matches />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/">
          <Redirect to="/tabelle" />
        </Route>
      </Switch>
    </AppLayout>
  );
};
