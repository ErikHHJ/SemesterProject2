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
    throw new Error("Something went wrong");
  }
}
