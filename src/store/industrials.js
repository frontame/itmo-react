import { action, makeObservable, observable, runInAction } from 'mobx';
import industrialData from '../data/industrialData';

class Industrials {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getIndustrials: action,
    });

    runInAction(this.getIndustrials);
  }

  getIndustrials = () => {
    this.data = industrialData;
  };
}

const industrials = new Industrials();

export default industrials;
