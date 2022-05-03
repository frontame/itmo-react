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
    this.data = null; // временно (чтобы не было ошибки ESLint)
  };
}

const publications = new Publications();

export default publications;
