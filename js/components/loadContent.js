import { calculateMinutesAgo } from "./constant/newTime.js";

export default function loadContent(data, offset) {
  const container = document.querySelector(".container");

  for (let i = 0; i < offset; i++) {
    const content = data[i];
    if (!content.media || content.media.length === 0) {
      continue;
    }

    const div = document.createElement("div");
    div.classList.add(
      "col-10",
      "mx-auto",
      "card",
      "my-5",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "login",
      "p-3",
      "rounded"
    );

    const title = document.createElement("h1");
    title.textContent = content.title;
    div.appendChild(title);

    const posted = document.createElement("p");
    console.log(content.created);
    console.log(calculateMinutesAgo(content.created));

    posted.textContent = "Posted: " + calculateMinutesAgo(content.created);
    div.appendChild(posted);

    const description = document.createElement("p");
    description.textContent = content.description;
    div.appendChild(description);

    const tagList = document.createElement("ul");
    tagList.textContent = "Tags: ";
    tagList.classList.add("list-unstyled", "d-flex");

    content.tags.forEach((tag) => {
      const tags = document.createElement("li");
      tags.textContent = tag;
      tags.classList.add("mx-2", "border", "p-1", "rounded");
      tagList.appendChild(tags);
    });

    div.appendChild(tagList);

    content.media.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo;
      img.classList.add("img-fluid");
      div.appendChild(img);
    });

    const dueDate = document.createElement("p");
    dueDate.textContent = "Due date: " + content.dueDate;
    dueDate.classList.add(
      "dueDate",
      "rounded",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "my-2"
    );
    div.appendChild(dueDate);

    container.prepend(div);
  }
}