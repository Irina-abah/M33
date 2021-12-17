// practising 1

// let coffeeOrder = [
//   "Alex - Cortado",
//   "Ben - Cortado",
//   "Charlie - Whatever's new"
// ]

// coffeeOrder[1] = "Ann - Vanilla latte";
// coffeeOrder.push("Donna - espresso")
// coffeeOrder.pop();

// console.log(coffeeOrder)

// practising 2

// let favouriteDrinks = ["coffee", "juice", "tonic"]

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// for (let i = 0; i < favouriteDrinks.length; i++) {
//   console.log(favouriteDrinks[i])
// };

// practising 3

// let multiplesTwo = [];

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     multiplesTwo.push(i)
//   }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// practising 4

// let age = 15;

// while (age < 18) {
//   console.log("You are a child!");
//   age++;
// }

// console.log("You are an adult!");

// practising 5

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
  console.log(currentCard)
  currentCard = cards[Math.floor(Math.random()*4)]
}
console.log(currentCard)