import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { FrontOfHouse } from './feature/FrontOfHouse';
import { Backyard } from './feature/Backyard';
import { useAuth } from './common/hooks';

function App() {
  const { authenticated } = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/hinterhof">
          {authenticated ? <Backyard /> : <Redirect to="/login" />}
        </Route>
        <Route>
          <FrontOfHouse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
