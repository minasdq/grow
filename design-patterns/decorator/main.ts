class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log("User: " + this.name);
  }
}

class DecoratedUser extends User {
  street: string;
  city: string;

  constructor(street: string, city: string) {
    super(user.name);
    this.street = street;
    this.city = city;
  }

  say(): void {
    console.log(
      "Decorated User: " + this.name + ", " + this.street + ", " + this.city
    );
  }
}

const user = new User("mina");
const decoratedUser = new DecoratedUser("khayam", "Isfahan");
decoratedUser.say()
