import { observer } from 'mobx-react';

// components
import Header from '../Header';
import Industrial from '../Industrial';
import Publications from '../Publications';
import CallToAction from '../CallToAction';
// import store from '../../store/store'

const App = () => {
  return (
    <>
      <Header />
      <Industrial />
      <Publications />
      <CallToAction />
    </>
  );
};

export default observer(App);
