import { baseUrl } from "./constant/baseUrl.js";
import loadProfile from "./displayFunctions/loadProfile.js";
import showError from "./displayFunctions/showError.js";
export default async function getProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const pname = params.get("pname");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const response = await fetch(`${baseUrl}profiles/${pname}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok === true) {
    const data = await response.json();
    console.log(data);
    loadProfile(data);
  } else {
    showError(
      `You are not authorized, please <a href="../login">login</a>` +
        "or " +
        `<a href="../register">register</a>`
    );
    throw new Error(response.statusText);
  }
}
