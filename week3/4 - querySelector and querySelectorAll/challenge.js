const myHeading = document.querySelector("#heading");
const veggies = document.querySelectorAll("li");
const evenVeggies = document.querySelectorAll("li:nth-child(even)");
const oddVeggies = document.querySelectorAll("li:nth-child(odd)");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
let x = 0;

myHeading.addEventListener("click", () => {
  for (let i = 0; i < veggies.length; i++) {
    veggies[i].style.color = colours[x]
    x++;
    if (x >= 6) {
      x = 0;
    }
  }
})

// myHeading.addEventListener("click", () => {
//   for(let i=0; i < evenVeggies.length; i++) {
//     evenVeggies[i].style.color = "lightgreen";
// }
// })


// myHeading.addEventListener("click", () => {
//   for (let i = 0; i < veggies.length; i++) {
//     if (veggies[i].className == "green") {
//       veggies[i].style.color = "green"
//     } else {
//       veggies[i].style.color = "orange"
//     }
//   }
// })

// const listItems = document.querySelectorAll("li:nth-child(even)");
// console.log(listItems);
// console.log(listItems.length);