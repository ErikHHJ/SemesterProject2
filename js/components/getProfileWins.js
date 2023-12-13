import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";
import specificListingFetch from "./specificListingFetch.js";
import removeBidBtns from "./removeBidBtns.js";

export default async function getProfileWins() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const pname = params.get("pname");

  const response = await fetch(`${baseUrl}profiles/${pname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok === true) {
    const data = await response.json();

    data.wins.forEach((obj) => {
      specificListingFetch(obj);
    });
  } else {
    showError(`Fetch failed, try again later`);
    throw new Error(response.statusText);
  }
  setTimeout(removeBidBtns, 500);
}
