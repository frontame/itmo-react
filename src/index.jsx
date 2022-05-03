import React from 'react';
import ReactDOM from 'react-dom/client';
import OpenSansFonts from './fonts';
import App from './components/App';
import GlobalStyles from './lib/styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenSansFonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
