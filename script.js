onload = () => {
  document.body.classList.remove("container");
};

const birthdayLetter = document.querySelector(".birthday-letter");
const birthdayMessage = document.querySelector("#birthday-message");
const closeBirthdayMessage = document.querySelector(".message-close");

birthdayLetter.addEventListener("click", () => birthdayMessage.showModal());
closeBirthdayMessage.addEventListener("click", () => birthdayMessage.close());
birthdayMessage.addEventListener("click", (event) => {
  if (event.target === birthdayMessage) birthdayMessage.close();
});