import { action, makeObservable, observable, runInAction } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
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
    publicationsData.forEach((item) => {
      const uid = uuidv4();
      this.data.push({ uid, ...item });
    });
  };
}

const publications = new Publications();

export default publications;
