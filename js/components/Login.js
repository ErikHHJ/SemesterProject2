import { baseUrl } from "./constant/baseUrl.js";
import { addToStorage } from "./addToStorage.js";

export default async function login(email, password) {
  const userLogin = {
    email: `${email}`,
    password: `${password}`,
  };
  const response = await fetch(`${baseUrl}auth/login`, {
    method: "POST",
    body: JSON.stringify(userLogin),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    addToStorage("token", data.accessToken);
    addToStorage("name", data.name);
    setTimeout(() => {
      window.location.href = "../feed/index.html";
    }, 1000);
  } else {
    throw new Error(response.statusText);
  }
}
