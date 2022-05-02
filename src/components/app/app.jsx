import { observer } from 'mobx-react';
// import store from '../../store/store'

function App({ kek }) {
  return <div className="kek">{kek}Hello</div>;
}

export default observer(App);
