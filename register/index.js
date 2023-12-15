import register from "../js/components/Register.js";

if (localStorage.getItem("token")) {
  console.log("token is set");
  window.location.href = "../feed/index.html";
}
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const avatarInput = document.querySelector("#avatar");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit");
  const userName = usernameInput.value;
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  const userAvatar = avatarInput.value;

  register(userName, userEmail, userPassword, userAvatar);
});
