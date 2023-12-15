import { baseUrl } from "./constant/baseUrl.js";
import showError from "./displayFunctions/showError.js";

export default async function deletePost(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Post deleted successfully.");
    location.reload();
  } catch (error) {
    console.error("Error deleting post:", error.message);
    // Handle the error as needed
  }
}
