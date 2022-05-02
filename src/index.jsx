import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import GlobalStyles from './lib/styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
