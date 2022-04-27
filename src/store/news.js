import { action, makeObservable, observable } from 'mobx';

class News {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getNews: action,
    });
  }

  getNews = () => {

  }
}

const news = new News();

export default news;
