class Address {
  constructor(street,zip) {
    this.street = street;
    this.zip = zip;
  }
}

class UserBuilderWithObjectParameter {
  constructor(name, {age, address, phone }={}) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
  }
}

const mina = new UserBuilderWithObjectParameter("Mina", { age: 23 });
const john = new UserBuilderWithObjectParameter("John", { age: 60 });

class UserBuilderWithMethods {
  constructor(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setPhone(phone) {
    this.phone = phone;
  };

  build() {
    return this;
  }
}

const person = new UserBuilderWithMethods('Person').setAge(30).setAddress(new Address('street', 123)).build();

console.log({ person, mina, john });