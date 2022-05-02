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
    this.data = null; // временно (чтобы не было ошибки ESLint)
  };
}

const news = new News();

export default news;
