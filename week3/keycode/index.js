const title = document.querySelector(".title");
const keys = document.querySelector(".keys");
const keycode = document.querySelector(".keycode");
const eventKey = document.querySelector(".event-key");
const eventCode = document.querySelector(".event-code");
const eventWhich = document.querySelector(".event-which");

document.addEventListener("keydown", (e) => {
  keys.classList.add("keys-active");
  title.classList.add("title-disabled");

  keycode.textContent = e.which;
  eventKey.textContent = e.key;
  eventCode.textContent = e.code;
  eventWhich.textContent = e.which;
})