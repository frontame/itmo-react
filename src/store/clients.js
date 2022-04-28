import { action, makeObservable, observable } from 'mobx';

class Clients {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getClients: action,
    });
  }

  getClients = () => {

  }
}

const clients = new Clients();

export default clients;
