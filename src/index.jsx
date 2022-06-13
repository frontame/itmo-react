import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import basicTheme from './themes/basic-theme';

import OpenSansFonts from './fonts';
import GlobalStyles from './lib/styled';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={basicTheme}>
      <OpenSansFonts />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
