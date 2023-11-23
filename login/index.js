import login from "../js/components/Login.js";
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit");
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;

  login(userEmail, userPassword);
});
