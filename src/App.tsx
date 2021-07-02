import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { auth as firebaseAuth } from './api/firebase';

import { FrontOfHouse } from './feature/FrontOfHouse';
import { Backyard } from './feature/Backyard';
import { useSetRecoilState } from 'recoil';
import { authState } from './common/state';
import { useAuth } from './common/hooks';

function App() {
  // Get auth state
  const { authenticated } = useAuth();

  // Subscribe to firebase auth
  const setAuth = useSetRecoilState(authState);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setAuth({
        isAuthenticating: false,
        authenticated: user !== null,
        user: user ? { email: user.email } : null,
      });
    });
  }, [setAuth]);

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
