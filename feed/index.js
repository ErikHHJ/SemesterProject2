import getAuctions from "../js/components/getAuctions.js";
import loadContent from "../js/components/loadContent.js";

const loginOrLogout = document.querySelector(".loginOrLogout");
if (localStorage.getItem("token")) {
  loginOrLogout.href = "#";
  loginOrLogout.innerHTML = "Logout";
  loginOrLogout.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    window.location.href = "../index.html";
  });
}

getAuctions();
loadContent();
