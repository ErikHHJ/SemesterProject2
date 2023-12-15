import { baseUrl } from "./constant/baseUrl.js";
export default async function register(username, email, password, avatar) {
  const userLogin = {
    name: `${username}`,
    email: `${email}`,
    password: `${password}`,
    avatar: `${avatar}`,
  };
  console.log(userLogin);
  const response = await fetch(`${baseUrl}auth/register`, {
    method: "POST",
    body: JSON.stringify(userLogin),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    const errorDiv = document.querySelector(".errorDiv");
    const error = document.createElement("p");
    error.classList.add("text-danger", "text-center");
    error.textContent =
      "Account creation failed. Remember only noroff.no email is accepted. Try again";
    errorDiv.appendChild(error);
    throw new Error("Something went wrong");
  }
}
