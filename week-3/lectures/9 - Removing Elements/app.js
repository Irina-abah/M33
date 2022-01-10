const input = document.getElementById("input");
const submitButton = document.getElementById("submit");
const list = document.getElementById("list");

const remove = document.getElementById("remove");

submitButton.addEventListener("click", () => {
  if (input.value !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
  }
})

remove.addEventListener("click", () => {
  list.removeChild(document.querySelector("li:last-child"))
})