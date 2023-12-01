import getAuctions from "./getAuctions.js";

const showMoreBtn = document.querySelector(".showMoreBtn");
export default showMoreBtn.addEventListener("click", () => {
  console.log("show more btn clicked");
  getAuctions(10, "created", "desc");
});
