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

  }
}

const projects = new Projects();

export default projects;
