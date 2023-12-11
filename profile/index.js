import getProfile from "../js/components/getProfile.js";
import loginOrLogout from "../js/components/loginOrLogout.js";
import updateAvatar from "../js/components/updateAvatar.js";
import getProfileWins from "../js/components/getProfileWins.js";
import getProfileListings from "../js/components/getProfileListings.js";
import loadSingleListing from "../js/components/displayFunctions/loadSingleListing.js";

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
  const createdDiv = document.querySelector(".createddiv");
  if (createdDiv) {
    createdDiv.remove();
  }
  getProfileWins();
});
viewListings.addEventListener("click", () => {
  const createdDiv = document.querySelector(".createddiv");
  if (createdDiv) {
    createdDiv.remove();
  }

  getProfileListings();
});
