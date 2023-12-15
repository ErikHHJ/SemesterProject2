import getAuctions, { modifyOffset } from "../getAuctions.js";
import { updateSortingOptions } from "../infiniteScrolling.js";

const container = document.querySelector(".container");

const tagInput = document.querySelector(".taginput");
export default function sortByTag() {
  tagInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.stopPropagation();
      container.innerHTML = "";
      modifyOffset(0);
      updateSortingOptions(
        undefined,
        undefined,
        tagInput.value.toLowerCase().trim()
      );
    }
  });
}
