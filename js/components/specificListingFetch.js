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
  const listingId = providedID || id;

  if (listingId) {
    try {
      const response = await fetch(
        `${baseUrl}listings/${listingId}?_seller=true&_bids=true`.replaceAll(
          '"',
          ""
        ),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        loadSingleListing(data);
        return data;
      } else if (response.status === 404) {
      } else {
        showError(`Fetch failed, try again later`);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error fetching listing:", error);
    }
  } else {
  }
}
