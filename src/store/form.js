import { makeObservable, observable } from 'mobx'

class Form {
  name = ''

  surname = ''

  phone = ''

  email = ''

  message = ''

  constructor() {
    makeObservable(this, {
      name: observable,
      surname: observable,
      phone: observable,
      email: observable,
      message: observable,
    })
  }
}

const form = new Form()

export default form
