import React from 'react';
import ReactDOM from 'react-dom/client';
import OpenSansFonts from './fonts';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OpenSansFonts />
    <App />
  </React.StrictMode>
);
