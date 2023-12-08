import { url } from "./specificListingFetch.js";
export default async function placeBid(url, bid) {
  const token = localStorage.getItem("token");
  const info = {
    amount: bid,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(info),
  });
  if (response.ok === true) {
    const data = await response.json();
    console.log(data);
    location.reload();

    return data;
  } else {
    throw new Error(response.statusText);
  }
}
