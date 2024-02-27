class Singleton {
  private static instance: Singleton | null = null;
  constructor() {
    if (Singleton.instance) {
      throw new Error("You can only create one instance!");
    }
    Singleton.instance = this;
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const child = Object.freeze(Singleton.getInstance());

export default child;
