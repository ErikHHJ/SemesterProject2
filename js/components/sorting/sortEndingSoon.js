import getAuctions from "../getAuctions.js";
import { updateSortingOptions } from "../infiniteScrolling.js";
const sortEndingSoon = document.querySelector(".sortEndingSoon");
const container = document.querySelector(".container");

export default sortEndingSoon.addEventListener("click", (event) => {
  console.log("onclick triggered");
  event.stopPropagation();
  container.innerHTML = "";
  updateSortingOptions("endsAt", "asc");
});
