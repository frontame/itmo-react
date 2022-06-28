import { observer } from 'mobx-react';
// components
import { useState } from 'react';
import Header from '../Header';
import Industrial from '../Industrial';
import Publications from '../Publications';
import Partners from '../Partners';
import CallToAction from '../CallToAction';
import Footer from '../Footer';
import Popup from '../Popup';
// import store from '../../store/store'

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <Header />
      <Industrial setSelectedCard={setSelectedCard} />
      {selectedCard && (
        <Popup
          card={selectedCard}
          closePopup={() => {
            setSelectedCard(null);
          }}
        />
      )}
      <Publications />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
};

export default observer(App);
