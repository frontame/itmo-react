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
    this.data = null; // временно (чтобы не было ошибки ESLint)
  };
}

const clients = new Clients();

export default clients;
