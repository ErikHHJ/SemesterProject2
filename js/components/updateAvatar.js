import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";

export default async function updateAvatar(newAvatar, providedUrl) {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const info = {
    avatar: newAvatar,
  };
  console.log(info);
  let url = ``;
  if (providedUrl === undefined) {
    url = `${baseUrl}profiles/${name}/avatar`;
  } else {
    url = providedUrl;
  }
  const response = await fetch(url, {
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
