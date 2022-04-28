import { action, makeObservable, observable } from 'mobx';

class Publications {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getPublications: action,
    });
  }

  getPublications = () => {

  }
}

const publications = new Publications();

export default publications;
