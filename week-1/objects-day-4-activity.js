// activity 1

// let alarm = "";
// let day = "Saturday";

// const setAlarm = {
//   weekendAlarm: "No",
//   weekdayAlarm: "Get up at 7am"
// };

// if (day == "Saturday" || day == "Sunday") {
//   alarm = setAlarm.weekendAlarm;
//   console.log(`You can sleep. ${alarm} alarm today`)
// } else if (day != "Saturday" || day != "Sunday") {
//   alarm = setAlarm.weekdayAlarm;
//   console.log(alarm)
// }

// activity 2

// const person = {
//   name: "Iryna",
//   age: 33,
//   songs: [
//     "song1", 
//     "song2", 
//     "song3"
//   ],
//   sayHi() {
//     return `Hello my name is ${this.name}`
//   }
// }

// console.log(person.sayHi())

// activity 3

// const pet = {
//   name: "Woffy",
//   typeOfPet: "Dog",
//   age: 10,
//   colour: "brown",
//   eat() {
//     return `Your pet ${this.name} is eating`
//   },
//   drink() {
//     return `Your pet ${this.name} is drinking`
//   }
// }

// console.log(pet.drink())

// activity 4

const coffeeShop = {
  branch: "Manchester",
  drinks: [
    {
      title: "Coffee",
      price: 30
    },
    {
      title: "Tea",
      price: 20
    },
    {
      title: "Capuccino",
      price: 35
    },
    {
      title: "Hot Chocolate",
      price: 35
    },
  ],
  food: [
    {
      title: "Eggs",
      price: 45
    },
    {
      title: "Pasta",
      price: 30
    },
    {
      title: "Cake",
      price: 18
    },
    {
      title: "Bisquit",
      price: 31
    },
  ],
  drinksOrdered() {
    return `Your order is ${this.drinks[1].title} and ${this.drinks[3].title} with the total cost of ${this.drinks[1].price + this.drinks[3].price}`
  },
  foodOrdered() {
    return `Your order is ${this.food[1].title} and ${this.food[2].title} with the total cost of ${this.food[1].price + this.food[2].price}`
  }
}

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered())
