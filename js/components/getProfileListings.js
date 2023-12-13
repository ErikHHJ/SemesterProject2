import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";
import loadSingleListing from "./displayFunctions/loadSingleListing.js";
import removeBidBtns from "./removeBidBtns.js";

export default async function getProfileListings() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const pname = params.get("pname");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  let buttons = "";

  const response = await fetch(
    `${baseUrl}profiles/${pname}/listings?_bids=true&_seller=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.ok === true) {
    const data = await response.json();
    console.log(data);

    data.forEach((obj) => {
      loadSingleListing(obj, buttons);
      /*if (obj.media.length === 1) {
        const img = document.querySelector(".img-fluid");
        img.onerror = function () {
          img.src = "../../noImage.jpg";
        };
      } else {
        const imgList = document.querySelectorAll(".img-fluid");
        imgList.forEach((img) => {
          img.onerror = function () {
            img.src = "../../noImage.jpg";
          };
        });
      }*/
    });
  } else {
    showError(`Fetch failed, try again later`);
    throw new Error(response.statusText);
  }
  setTimeout(removeBidBtns, 500);
}
