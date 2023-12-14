import getAuctions from "../js/components/getAuctions.js";
import loadContent from "../js/components/displayFunctions/loadContent.js";
import showMoreBtn from "../js/components/showMoreBtn.js";
import loginOrLogout from "../js/components/loginOrLogout.js";
import sortRecently from "../js/components/sorting/sortRecently.js";
import sortEndingSoon from "../js/components/sorting/sortEndingSoon.js";
import moreThanOne from "../js/components/moreThanOne.js";
import newPost from "../js/components/newPost.js";
import sortByTag from "../js/components/sorting/sortByTag.js";
import hrefProfile from "../js/components/toOwnProfile.js";
import postParams from "../js/components/postParams.js";
postParams();
document.addEventListener("DOMContentLoaded", function () {
  hrefProfile();
});
import {
  handleIntersection,
  createObserver,
  updateSortingOptions,
  observeTarget,
  disconnectObserver,
} from "../js/components/infiniteScrolling.js";

const targetElement = document.querySelector("#loadMoreTrigger");
const observer = createObserver();
observer.observe(targetElement);

const createNew = document.querySelector(".createnew");

if (!localStorage.getItem("token")) {
  createNew.disabled = true;
  createNew.classList.add("text-black");
  const notLoggedIn = document.createElement("p");
  notLoggedIn.classList.add("text-center", "text-danger");
  notLoggedIn.textContent = "You must be logged in to create a new listing";
  createNew.appendChild(notLoggedIn);
}
sortByTag();
