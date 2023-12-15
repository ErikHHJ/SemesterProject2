import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";

export default async function updateAvatar(newAvatar) {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const info = {
    avatar: newAvatar,
  };
  console.log(info);
  const response = await fetch(`${baseUrl}profiles/${name}/media`, {
    method: "PUT",
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
  } else {
    throw new Error(response.statusText);
  }
}
