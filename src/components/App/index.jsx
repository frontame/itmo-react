import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import basicTheme from '../../themes/basic-theme';

// components
import Header from '../Header';
import Industrial from '../Industrial';
// import store from '../../store/store'

const App = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Header />
      <Industrial />
    </ThemeProvider>
  );
};

export default observer(App);
