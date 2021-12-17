// practising 1

let offer = "none";
let time = 1200;
// let hasSpecialOffers = true;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialDrinks: true,
  hasSpecialOffers: true,
  drinks: [
    "Capuccino",
    "Latte",
    "Filter Coffee",
    "Tea",
    "hot chocolate"
  ],
  breakfastOffer: "Free croissant with coffee",
  lunchOffer: "Free drink with surprisingly priced sandwich",
  noOffer: "Sorry no offer",
  openCafe() {
    if (this.hasSpecialOffers) {
      return "Time for a special offer"
    }
  },
  closeCafe: () => {
    return "We are closed, come back tomorrow"
  }
}

console.log(cafe.openCafe());
console.log(cafe.closeCafe());

// if (time < 1100) {
//   offer = cafe.breakfastOffer;
//   console.log(offer)
// } else if (time < 1500) {
//   offer = cafe.lunchOffer;
//   console.log(offer)
// }

// activity 1

// const person = {
//   name: "Iryna",
//   age: 33
// }

// person.songs = ["song1", "song2", "song3"]

// if (person.name == "Iryna") {
//   console.log(person.songs)
// }
