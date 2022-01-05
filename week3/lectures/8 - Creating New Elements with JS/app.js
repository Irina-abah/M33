const input = document.getElementById("input");
const submitButton = document.getElementById("submit");
const list = document.getElementsByTagName("ul")[0];

const hideButton = document.getElementById("showhide-btn");

submitButton.addEventListener("click", () => {
  if (input.value !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
    console.log(listItem)
  }
})

hideButton.addEventListener("click", () => {
  if (list.style.display == "none") {
    list.style.display = "block";
    hideButton.textContent = "hide";
  } else {
    list.style.display = "none";
    hideButton.textContent = "show";
}
})

