import { action, makeObservable, observable } from 'mobx';

class Industrials {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getIndustrials: action,
    });
  }

  getIndustrials = () => {

  }
}

const industrials = new Industrials();

export default industrials;
