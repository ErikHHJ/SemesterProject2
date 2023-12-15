import login from "../js/components/Login.js";
if (localStorage.getItem("token")) {
  console.log("token is set");
  window.location.href = "../feed/index.html";
}
const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submit");
  const userEmail = emailInput.value;
  const userPassword = passwordInput.value;
  setTimeout(() => {
    console.log("waiting");
  }, 1000);

  login(userEmail, userPassword);
});
