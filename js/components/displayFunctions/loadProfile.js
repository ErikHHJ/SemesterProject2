import redName from "../loginOrLogout.js";
export default function loadProfile(data) {
  redName();
  const storageName = localStorage.getItem("name");

  const container = document.querySelector(".container");
  const avatar = document.querySelector("#avatar");
  const banner = document.querySelector("#banner");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const listings = document.querySelector("#listings");
  const wins = document.querySelector("#wins");
  const bids = document.querySelector("#bids");

  avatar.src = data.avatar;
  username.textContent = data.name;
  email.textContent += data.email;
  listings.textContent = data._count.listings;
  wins.textContent = data.wins.length;
}
