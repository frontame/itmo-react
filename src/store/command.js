import { action, makeObservable, observable } from 'mobx';

class Command {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      getCommand: action,
    });
  }

  getCommand = () => {
    this.data = null; // временно (чтобы не было ошибки ESLint)
  };
}

const command = new Command();

export default command;
