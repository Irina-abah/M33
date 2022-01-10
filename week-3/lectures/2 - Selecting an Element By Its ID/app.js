const heading = document.getElementById("heading");
const input = document.getElementById("input");
const button = document.getElementById("button"); 

button.addEventListener("click", () => {
  heading.innerHTML = input.value;
});