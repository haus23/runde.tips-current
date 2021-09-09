import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { FrontOfHouse } from '@/feature/FrontOfHouse';
import { Backyard } from '@/feature/Backyard';
import { useAuth } from '@/api/auth/hooks';
import { SplashScreen } from '@/common/pages/SplashScreen';

function App() {
  const { isAuthenticating, authenticated } = useAuth();
  const isLoading = false; // TODO: load FOH Data
  return (
    <Router>
      <Switch>
        <Route path="/hinterhof">
          {isAuthenticating ? (
            <SplashScreen showWhile={isAuthenticating} />
          ) : authenticated ? (
            <Backyard />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route>
          <SplashScreen showWhile={isLoading} />
          <FrontOfHouse />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
