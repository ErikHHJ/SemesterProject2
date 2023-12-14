import { baseUrl } from "./constant/baseUrl.js";
import postParams from "../components/postParams.js";

export default async function newPost(info) {
  const url = `${baseUrl}listings`;
  const accessToken = localStorage.getItem("token");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(info),
  });
  if (res.ok === true) {
    const data = await res.json();
    postParams();
    console.log(data);
    location.reload();
  } else {
    throw new Error(res.statusText);
  }
}
