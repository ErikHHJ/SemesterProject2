import { baseUrl } from "./constant/baseUrl.js";
import { addToStorage } from "./addToStorage.js";

// This function is called when the user clicks the login button.
// It takes the values from the input fields and sends them to the API.
// If the user is successfully logged in, the token is stored in local storage.
// If the user is not successfully logged in, an error message is displayed.
export default async function login(email, password) {
  const response = await fetch(`${baseUrl}auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    addToStorage("token", data.accessToken);
    addToStorage("name", data.name);
  } else {
    throw new Error(response.statusText);
  }
}
