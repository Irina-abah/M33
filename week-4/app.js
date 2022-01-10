class Dog {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  hunger = 0;
  thirst = 0;
  energy = 10;

  play() {
    console.log(`${this.name} is having great time playing!`)
  }
}

let fido = new Dog("Fido", 2);

console.log(fido)