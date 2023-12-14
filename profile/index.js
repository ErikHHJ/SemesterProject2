import getProfile from "../js/components/getProfile.js";
import loginOrLogout from "../js/components/loginOrLogout.js";
import updateAvatar from "../js/components/updateAvatar.js";
import getProfileWins from "../js/components/getProfileWins.js";
import getProfileListings from "../js/components/getProfileListings.js";
import loadSingleListing from "../js/components/displayFunctions/loadSingleListing.js";
import hrefProfile from "../js/components/toOwnProfile.js";
import placeBid from "../js/components/placeBid.js";
import moreThanOne from "../js/components/moreThanOne.js";

document.addEventListener("DOMContentLoaded", function () {
  hrefProfile();
});
const container = document.querySelector(".container");

const updateAvatarBtn = document.querySelector("#updateAvatarBtn");
const newAvatar = document.querySelector("#newAvatar");
updateAvatarBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  updateAvatar(newAvatar.value);
});
getProfile();

const viewWins = document.querySelector(".viewwins");
const viewListings = document.querySelector(".viewlistings");

viewWins.addEventListener("click", () => {
  const createdDivs = document.querySelectorAll(".createddiv");
  if (createdDivs) {
    createdDivs.forEach((createdDiv) => {
      createdDiv.remove();
    });
  }
  getProfileWins();
});
viewListings.addEventListener("click", () => {
  const createdDivs = document.querySelectorAll(".createddiv");
  if (createdDivs) {
    createdDivs.forEach((createdDiv) => {
      createdDiv.remove();
    });
  }

  getProfileListings();
});
