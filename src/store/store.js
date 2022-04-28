import news from './news';
import industrials from './industrials';
import projects from './projects';
import publications from './publications';
import command from './command';
import clients from './clients';
import form from './form';

class Store {
  news = news;
  industrials = industrials;
  projects = projects;
  publications = publications;
  command = command;
  clients = clients;
  form = form;
}

const store = new Store();

export default store;
