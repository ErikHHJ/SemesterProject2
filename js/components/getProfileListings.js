import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";
import loadSingleListing from "./displayFunctions/loadSingleListing.js";

export default async function getProfileListings() {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  console.log(name);
  const response = await fetch(
    `${baseUrl}profiles/${name}/listings?_bids=true&_seller=true`,
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
    console.log(data.length);

    data.forEach((obj) => {
      loadSingleListing(obj);
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
