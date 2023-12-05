import { calculateMinutesAgo } from "../constant/newTime.js";
import createDiv from "./createDiv.js";

export default function loadContent(data) {
  console.log("loadContent was run");
  const container = document.querySelector(".container");

  for (let i = 0; i < data.length; i++) {
    const content = data[i];
    if (!content.media || content.media.length === 0) {
      continue;
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

    if (content.description.length > 200) {
      description.textContent = content.description.substring(0, 50) + "...";
    } else {
      description.textContent = content.description;
    }

    const tagList = document.createElement("ul");
    tagList.textContent = "Tags: ";
    tagList.classList.add("list-unstyled", "d-flex", "flex-wrap", "italic");

    content.tags.forEach((tag) => {
      const tags = document.createElement("li");
      tags.textContent = tag;
      tags.classList.add("mx-2", "p-1");
      tagList.appendChild(tags);
    });

    div.appendChild(tagList);
    if (content.media.length > 1) {
      const carouselId = `carousel-${i}`;
      const carousel = document.createElement("div");
      carousel.classList.add("carousel", "slide");
      carousel.setAttribute("id", carouselId);
      const indicators = document.createElement("div");
      indicators.classList.add("carousel-indicators");
      content.media.forEach((photo, index) => {
        const indicator = document.createElement("button");

        indicator.type = "button";
        indicator.setAttribute("data-bs-target", "#carouselExampleIndicators");
        indicator.setAttribute("data-bs-slide-to", index.toString());
        if (index === 0) {
          indicator.classList.add("active");
        }
        indicators.appendChild(indicator);
      });

      carousel.setAttribute("data-bs-ride", "carousel");
      const inner = document.createElement("div");
      inner.classList.add("carousel-inner");
      content.media.forEach((photo, index) => {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) {
          item.classList.add("active");
        }
        const imgLink = document.createElement("a");
        imgLink.href = `../specificlisting/index.html?id="${content.id}"`;

        const img = document.createElement("img");
        img.src = photo;
        img.classList.add("d-block", "w-100", "rounded", "max-vh-50");
        imgLink.appendChild(img);
        item.appendChild(imgLink);
        inner.appendChild(item);
      });
      const buttonPrev = document.createElement("button");
      buttonPrev.classList.add("carousel-control-prev");
      buttonPrev.type = "button";
      buttonPrev.setAttribute("data-bs-target", `#${carouselId}`);
      buttonPrev.setAttribute("data-bs-slide", "prev");
      const spanPrev = document.createElement("span");
      spanPrev.classList.add("carousel-control-prev-icon");
      spanPrev.setAttribute("aria-hidden", "true");
      const spanHiddenPrev = document.createElement("span");
      spanHiddenPrev.classList.add("visually-hidden");
      spanHiddenPrev.textContent = "Previous";

      buttonPrev.appendChild(spanPrev);
      buttonPrev.appendChild(spanHiddenPrev);

      const buttonNext = document.createElement("button");
      buttonNext.classList.add("carousel-control-next");
      buttonNext.type = "button";
      buttonNext.setAttribute("data-bs-target", `#${carouselId}`);
      buttonNext.setAttribute("data-bs-slide", "next");
      const spanNext = document.createElement("span");
      spanNext.classList.add("carousel-control-next-icon");
      spanNext.setAttribute("aria-hidden", "true");
      const spanHiddenNext = document.createElement("span");
      spanHiddenNext.classList.add("visually-hidden");
      spanHiddenNext.textContent = "Next";
      buttonNext.appendChild(spanNext);
      buttonNext.appendChild(spanHiddenNext);
      carousel.appendChild(buttonPrev);
      carousel.appendChild(buttonNext);
      carousel.appendChild(indicators);
      carousel.appendChild(inner);
      div.appendChild(carousel);
    } else {
      const imgLink = document.createElement("a");
      imgLink.href = `../specificlisting/index.html?id="${content.id}"`;
      const img = document.createElement("img");
      img.src = content.media[0];
      img.classList.add("img-fluid", "w-100", "rounded", "max-vh-50");
      imgLink.appendChild(img);
      div.appendChild(imgLink);
    }
    div.appendChild(description);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add(
      "card-footer",
      "d-flex",
      "justify-content-around",
      "align-items-center"
    );
    const avatar = document.createElement("img");
    avatar.src = content.seller.avatar;
    avatar.classList.add("avatar", "rounded-circle", "img-thumbnail");

    const dueDate = document.createElement("p");
    dueDate.textContent =
      "Due date: in " +
      calculateMinutesAgo(new Date(content.endsAt), new Date());
    dueDate.classList.add(
      "dueDate",
      "rounded",
      "btn",
      "btn-dark",
      "justify-content-center",
      "align-items-center",
      "my-2"
    );
    const seller = document.createElement("ul");
    seller.classList.add(
      "d-flex",
      "flex-column",
      "justify-content-center",
      "p3",
      "meta",
      "list-unstyled"
    );

    const sellerName = document.createElement("li");
    const sellerEmail = document.createElement("li");
    const sellerBids = document.createElement("li");
    const sellerNameA = document.createElement("a");
    const sellerEmailA = document.createElement("a");
    const sellerbidsA = document.createElement("a");
    sellerBids.classList.add("italic");
    sellerNameA.classList.add("italic");
    sellerEmailA.classList.add("italic");

    sellerbidsA.textContent = `Bids: ${content._count.bids}`;
    sellerNameA.textContent = "Posted by " + content.seller.name;
    sellerEmailA.textContent = "Seller Email: " + content.seller.email;

    sellerName.appendChild(sellerNameA);
    sellerEmail.appendChild(sellerEmailA);
    sellerBids.appendChild(sellerbidsA);
    seller.appendChild(sellerName);
    seller.appendChild(sellerEmail);
    seller.appendChild(sellerBids);

    cardFooter.appendChild(avatar);
    cardFooter.appendChild(seller);
    cardFooter.appendChild(dueDate);
    div.appendChild(cardFooter);

    container.appendChild(div);
  }
}
