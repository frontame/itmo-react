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

  }
}

const command = new Command();

export default command;
