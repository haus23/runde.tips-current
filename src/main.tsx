import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './styles.css';

// Api
import { ApiProvider } from '@/api/context';

// App
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('app')
);
