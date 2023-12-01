import getAuctions from "../getAuctions.js";
import { updateSortingOptions } from "../infiniteScrolling.js";
const sortRecently = document.querySelector(".sortRecently");
const container = document.querySelector(".container");

export default sortRecently.addEventListener("click", (event) => {
  console.log("onclick triggered");
  event.stopPropagation();
  container.innerHTML = "";
  updateSortingOptions("created", "desc");
});
