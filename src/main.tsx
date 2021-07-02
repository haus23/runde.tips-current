import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// App
import App from './App';
import { SplashScreen } from './common/pages/SplashScreen';

// State
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SplashScreen />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('app')
);
