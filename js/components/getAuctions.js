import { baseUrl } from "./constant/baseUrl.js";
import loadContent from "./loadContent.js";
export default async function getAuctions(container) {
  const response = await fetch(`${baseUrl}listings?_active=true`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    loadContent(data, 20);
  } else {
    throw new Error(response.statusText);
  }
}
