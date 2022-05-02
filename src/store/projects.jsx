import { action, makeObservable, observable } from 'mobx';

class Projects {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getProjects: action,
    });
  }

  getProjects = () => {
    this.data = null; // временно (чтобы не было ошибки ESLint)
  };
}

const projects = new Projects();

export default projects;
