import { observer } from 'mobx-react';

// components
import Header from '../Header';
import Industrial from '../Industrial';
// import store from '../../store/store'

const App = () => {
  return (
    <>
      <Header />
      <Industrial />
    </>
  );
};

export default observer(App);
