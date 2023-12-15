import { baseUrl } from "./constant/baseUrl.js";
import loadContent from "./displayFunctions/loadContent.js";
import showError from "./displayFunctions/showError.js";
export let offset = 0;
export function modifyOffset(value) {
  offset = value;
}
export default async function getAuctions(limit, sortBy, sortOrder, tag) {
  let url = `${baseUrl}listings?offset=${offset}&limit=${limit}&_active=true&_seller=true&_bids=true`;
  if (tag !== undefined) {
    url += `&_tag=${tag}`;
  }

  if (sortBy && sortOrder) {
    url += `&sort=${sortBy}&sortOrder=${sortOrder}`;
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok === true) {
    const data = await response.json();

    loadContent(data);
  } else {
    showError(`Fetch failed, try again later`);
    throw new Error(response.statusText);
  }
  offset += limit;
}
