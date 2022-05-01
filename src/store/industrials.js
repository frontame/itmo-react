import { action, makeObservable, observable } from 'mobx'

class Industrials {
  data = []

  constructor() {
    makeObservable(this, {
      data: observable,
      getIndustrials: action,
    })
  }

  getIndustrials = () => {
    this.data = null // временно (чтобы не было ошибки ESLint)
  }
}

const industrials = new Industrials()

export default industrials
