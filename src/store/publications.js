<<<<<<< HEAD
import { action, makeObservable, observable, runInAction } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import publicationsData from '../data/publicationsData';
=======
import { action, makeObservable, observable } from 'mobx';
import industrialData from '../data/industrialData';
>>>>>>> develop

class Publications {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      loadPublications: action,
    });

    runInAction(this.loadPublications);
  }

<<<<<<< HEAD
  loadPublications = () => {
    publicationsData.forEach((item) => {
      const uid = uuidv4();
      this.data.push({ uid, ...item });
    });
=======
  getPublications = () => {
    this.data = industrialData;
>>>>>>> develop
  };
}

const publications = new Publications();

export default publications;
