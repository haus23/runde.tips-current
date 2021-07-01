import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SplashScreen } from './common/pages/SplashScreen';
import { FrontOfHouse } from './feature/FrontOfHouse';
import { Backyard } from './feature/Backyard';

function App() {
  return (
    <>
      <SplashScreen />
      <Router>
        <Switch>
          <Route path="/hinterhof">
            <Backyard />
          </Route>
          <Route>
            <FrontOfHouse />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
