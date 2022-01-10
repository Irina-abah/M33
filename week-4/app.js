class Caterpillar {
  constructor(name, length, legs) {
    this.name = name;
    this.length = length;
    this.legs = legs;
    this.hunger = 20;
  }

  hungry() {
    console.log(`${this.name} wants some food!`);
  }

  eating() {
    this.hunger--;
    this.length++
    console.log(`${this.name} is eating some nice food`);
  }
}

const hungryCaterpillar = new Caterpillar("Mike", 10, 20)

console.log(hungryCaterpillar.eating());




// class Dog {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }

//   hunger = 0;
//   thirst = 0;
//   energy = 10;

//   play() {
//     console.log(`${this.name} is having great time playing!`)
//   }
// }

// let fido = new Dog("Fido", 2);

// console.log(fido)