const person = {
  firstName: 'Mina',
  lastName: 'Sadeghi',
  age: 30
}

const personProxy = new Proxy(person, {
  get: (obj,prop) => {
    console.log(`the value of ${prop} is ${Reflect.get(obj,prop)}`)
  },
  set: (obj, prop, value) => {
    if(prop === 'age' && typeof value !== 'number') {
      throw new Error('age should be a number')
    }
    console.log(`changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value)
    return true
  }
})

personProxy.age= 12