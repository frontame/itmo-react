import { observer } from 'mobx-react';
// components
import Header from '../Header';
import Industrial from '../Industrial';
import Publications from '../Publications';
import Partners from '../Partners';
import CallToAction from '../CallToAction';
import Footer from '../Footer';
// import store from '../../store/store'

const App = () => {
  return (
    <>
      <Header />
      <Industrial />
      <Publications />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
};

export default observer(App);
