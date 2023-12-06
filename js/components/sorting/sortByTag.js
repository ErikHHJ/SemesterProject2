import getAuctions, { modifyOffset } from "../getAuctions.js";
import { updateSortingOptions } from "../infiniteScrolling.js";

const sortByTag = document.querySelector(".searchTags");
const container = document.querySelector(".container");

export default sortByTag.addEventListener("click", (event) => {
  console.log("hei");
  event.stopPropagation();
  event.preventDefault();

  const tagInput = document.createElement("input");
  tagInput.classList.add("form-control", "tagInputExists");
  tagInput.setAttribute("placeholder", "Enter tag");
  tagInput.setAttribute("type", "text");
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

      setTimeout(() => {
        if (container.innerHTML === "") {
          const error = document.createElement("h1");
          error.classList.add("error");
          error.innerHTML = "No auctions with that tag";
          container.prepend(error);
        } else {
          error.remove();
        }
      }, 1000);

      console.log(tagInput.value.toLowerCase().trim());
      tagInput.remove();
    }
  });
  if (document.querySelector(".tagInputExists")) {
    return;
  } else {
    sortByTag.appendChild(tagInput);
  }
});
