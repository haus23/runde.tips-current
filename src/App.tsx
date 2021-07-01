import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { LogIn, Matches, Players, Standings } from './pages';
import { Backyard } from './backyard/Backyard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hinterhof">
          <Backyard />
        </Route>
        <Route>
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
