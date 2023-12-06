import { calculateMinutesAgo } from "../constant/newTime.js";
import createDiv from "./createDiv.js";

export default function loadSingleListing(data) {
  console.log("loadSingleListing was run");
  console.log(data);
  const container = document.querySelector(".container");

  const content = data;
  console.log(content);
  if (!content.media || content.media.length === 0) {
    return;
  }
  const div = createDiv();
  const title = document.createElement("h1");
  if (content.title.length > 100) {
    title.textContent = content.title.substring(0, 50) + "...";
    title.classList.add(
      "d-flex",
      "flex-wrap",
      "overflow-hidden",
      "w-50",
      "text-center"
    );
  } else {
    title.textContent = content.title;
    title.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "flex-wrap",
      "overflow-hidden",
      "w-50",
      "text-center"
    );
  }

  div.appendChild(title);

  const posted = document.createElement("p");
  posted.classList.add("border", "rounded", "p-1", "italic");

  posted.textContent =
    "Posted: " +
    calculateMinutesAgo(new Date(), new Date(content.created)) +
    " ago";
  div.appendChild(posted);

  const description = document.createElement("p");
  description.classList.add(
    "d-flex",
    "w-100",
    "flex-column",
    "flex-wrap",
    "p-3",
    "overflow-hidden",
    "text-center"
  );

  description.textContent = content.description;
  div.appendChild(description);
  const tagList = document.createElement("ul");
  tagList.textContent = "Tags: ";
  tagList.classList.add("list-unstyled", "d-flex", "flex-wrap", "italic");
  if (content.tags.length === 0 || content.tags[0] === "") {
    const noTags = document.createElement("li");
    noTags.textContent = "No tags";
    noTags.classList.add("mx-1");
    tagList.appendChild(noTags);
  } else {
    content.tags.forEach((tag) => {
      const tags = document.createElement("li");
      if (content.tags.length === 1) {
        tags.textContent = tag;
        tags.classList.add("mx-2");
        tagList.appendChild(tags);
      } else {
        tags.textContent = tag + ",";
        tags.classList.add("mx-2");
        tagList.appendChild(tags);
      }
    });
  }

  div.appendChild(tagList);

  const img = document.createElement("img");
  img.classList.add("img-fluid", "w-100");
  img.src = content.media[0];

  div.appendChild(img);

  container.appendChild(div);
}
