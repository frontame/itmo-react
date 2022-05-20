import { observer } from 'mobx-react';

// components
import Header from '../Header';
import Industrial from '../Industrial';
import CallToAction from '../CallToAction';
// import store from '../../store/store'

const App = () => {
  return (
    <>
      <Header />
      <Industrial />
      <CallToAction />
    </>
  );
};

export default observer(App);
