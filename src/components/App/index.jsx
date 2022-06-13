import { observer } from 'mobx-react';
// components
import Header from '../Header';
import Industrial from '../Industrial';
import Publications from '../Publications';
import Footer from '../Footer';
import Partners from '../Partners';
// import store from '../../store/store'

const App = () => {
  return (
    <>
      <Header />
      <Industrial />
      <Publications />
      <Partners />
      <Footer />
    </>
  );
};

export default observer(App);
