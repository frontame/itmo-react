import { action, makeObservable, observable } from 'mobx';
import industrialData from '../data/industrialData';

class Publications {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getPublications: action,
    });
  }

  getPublications = () => {
    this.data = industrialData;
  };
}

const publications = new Publications();

export default publications;
