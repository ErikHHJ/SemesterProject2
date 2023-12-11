import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";
import loadSingleListing from "./displayFunctions/loadSingleListing.js";
import specificListingFetch from "./specificListingFetch.js";

export default async function getProfileWins() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  console.log(name);
  const response = await fetch(`${baseUrl}profiles/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok === true) {
    const data = await response.json();
    console.log(data);

    data.wins.forEach((obj) => {
      console.log(obj);
      specificListingFetch(obj);
    });
  } else {
    showError(
      `You are not authorized, please <a href="../login">login</a>` +
        "or " +
        `<a href="../register">register</a>`
    );
    throw new Error(response.statusText);
  }
}
