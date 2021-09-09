import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// App
import { AppProvider } from '@/common/context';

// App
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
