const cucumber = document.getElementById("example");
const listItems = document.getElementsByTagName("li");


for (let i = 0; i < theItems.length; i++) {
  theItems[i].addEventListener("mouseover", () => {
      theItems[i].textContent = theItems[i].textContent.toUpperCase();
  });
  theItems[i].addEventListener("mouseout", () => {
      theItems[i].textContent = theItems[i].textContent.toLowerCase();
  });
  theItems[i].addEventListener("click", () => {
      list.removeChild(theItems[i]);
  });
}

// for (let item of listItems) {
//   item.addEventListener("mouseover", () => {
//     item.textContent = item.textContent.toUpperCase()
//   })
  
//   item.addEventListener("mouseout", () => {
//     item.textContent = item.textContent.toLowerCase()
//   })

//   item.addEventListener("click", () => {
//     listItems.removeChild(item)
//   })
// }

// cucumber.addEventListener("mouseover", () => {
//   cucumber.textContent = cucumber.textContent.toUpperCase()
// })

// cucumber.addEventListener("mouseout", () => {
//   cucumber.textContent = cucumber.textContent.toLowerCase()
// })