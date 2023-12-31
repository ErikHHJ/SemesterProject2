import redName from "../loginOrLogout.js";
export default function loadProfile(data) {
  redName();
  const storageName = localStorage.getItem("name");
  const profileBtn = document.querySelector(".profilebtn");

  const container = document.querySelector(".container");
  const avatar = document.querySelector("#avatar");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const listings = document.querySelector("#listings");
  const wins = document.querySelector("#wins");
  const credits = document.querySelector("#credits");
  document.title += data.name;
  if (storageName === data.name) {
    if (data.avatar === null || data.avatar === "") {
      avatar.src = "../../../images/anonProfile.jpg";
    } else {
      avatar.src = data.avatar;
    }
    username.textContent = "Logged in as: " + data.name;
    email.textContent += " " + data.email;
    credits.textContent += " " + data.credits;
    listings.textContent = data._count.listings;
    wins.textContent = data.wins.length;
  } else {
    credits.remove();
    profileBtn.remove();
    if (data.avatar === null || data.avatar === "") {
      avatar.src = "../../../images/anonProfile.jpg";
    } else {
      avatar.src = data.avatar;
    }
    username.textContent = data.name;
    email.textContent += data.email;
    listings.textContent = data._count.listings;
    wins.textContent = data.wins.length;
  }
}
