import { action, makeObservable, observable, runInAction } from 'mobx';
import publicationsData from '../data/publicationsData';

class Publications {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      loadPublications: action,
    });

    runInAction(this.loadPublications);
  }

  loadPublications = () => {
    this.data = publicationsData;
  }
}

const publications = new Publications();

export default publications;
