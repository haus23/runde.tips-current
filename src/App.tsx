import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { Transition } from '@headlessui/react';

import { AppLayout } from './components/AppLayout';
import { SplashScreen } from './components/SplashScreen';
import { Backyard } from './backyard/Backyard';

import { LogIn, Matches, Players, Standings } from './pages';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <Transition
        show={isLoading}
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <SplashScreen />
      </Transition>
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
    </>
  );
}

export default App;
