// class Caterpillar {
//   constructor(name, legs) {
//     this.name = name;
//     this.legs = legs;
//     this.hunger = 20;
//   }

//   hungry() {
//     console.log(`${this.name} wants some food!`);
//     this.hunger++;
//   }

//   eating() {
//     console.log(`${this.name} is eating some nice food`);
//     this.hunger--;
//   }
// }

// const hungryCaterpillar = new Caterpillar("Mike", 10, 20)

// console.log(hungryCaterpillar);
// console.log(hungryCaterpillar.hungry());

// activity for global scope

const five = 5;
const seven = 7;

const newNumber = () => {
  const number = five * seven;
  return number;
};

console.log(newNumber())


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