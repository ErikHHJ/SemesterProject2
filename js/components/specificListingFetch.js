import { baseUrl } from "./constant/baseUrl.js";
import loadSingleListing from "./displayFunctions/loadSingleListing.js";
import showError from "./displayFunctions/showError.js";
const container = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const url =
  baseUrl + `listings/${id}?_seller=true&_bids=true`.replaceAll('"', "");
export default async function specificListingFetch(providedID) {
  if (id) {
    console.log(url);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      loadSingleListing(data);

      return data;
    } else {
      showError(`Fetch failed, try again later`);
      throw new Error(response.statusText);
    }
  } else {
    const response = await fetch(
      baseUrl +
        `listings/${providedID}?_seller=true&_bids=true`.replaceAll('"', ""),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      loadSingleListing(data);

      return data;
    } else {
      showError(`Fetch failed, try again later`);
      throw new Error(response.statusText);
    }
  }
}
