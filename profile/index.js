import getProfile from "../js/components/getProfile.js";
import loginOrLogout from "../js/components/loginOrLogout.js";
import updateAvatar from "../js/components/updateAvatar.js";

const updateAvatarBtn = document.querySelector("#updateAvatarBtn");
const newAvatar = document.querySelector("#newAvatar");
updateAvatarBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  updateAvatar(newAvatar.value);
});
getProfile();
