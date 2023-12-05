import { baseUrl } from "./constant/baseUrl.js";
import loadContent from "./displayFunctions/loadContent.js";
export let offset = 0;
export function modifyOffset(value) {
  offset = value;
}
export default async function getAuctions(limit, sortBy, sortOrder) {
  const url =
    `${baseUrl}` +
    "listings" +
    `?offset=${offset}` +
    `&limit=${limit}` +
    `&sort=${sortBy}` +
    `&sortOrder=${sortOrder}` +
    "&_active=true" +
    "&_seller=true" +
    "&_bids=true";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok === true) {
    const data = await response.json();

    console.log(data);
    loadContent(data);
  } else {
    throw new Error(response.statusText);
  }
  offset += limit;
}
