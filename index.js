export default class Greeter {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return &quot;Hello &quot; + this.name;
  }
}