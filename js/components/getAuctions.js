import { baseUrl } from "./constant/baseUrl.js";
import loadContent from "./loadContent.js";
export default async function getAuctions(offset, limit, sortBy, sortOrder) {
  const response = await fetch(
    `${baseUrl}` +
      "listings" +
      `?offset=${offset}` +
      `&limit=${limit}` +
      `&sort=${sortBy}` +
      `&sortOrder=${sortOrder}` +
      "&_active=true" +
      "&_seller=true" +
      "&_bids=true",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok === true) {
    const data = await response.json();
    console.log(response);
    console.log(data);
    loadContent(data);
  } else {
    throw new Error(response.statusText);
  }
}
