import { baseUrl } from "../constant/baseUrl.js";
import { calculateMinutesAgo } from "../constant/newTime.js";
import createDiv from "./createDiv.js";
import placeBid from "../placeBid.js";
import postParams from "../postParams.js";
import deletePost from "../deletePost.js";

let modalCounter = 0;

export default function loadSingleListing(data, buttons) {
  const container = document.querySelector(".container");
  console.log(data);
  const content = data;

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
  posted.classList.add("italic");

  posted.textContent =
    "Posted: " +
    calculateMinutesAgo(new Date(), new Date(content.created)) +
    " ago";

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
  const tagList = document.createElement("ul");
  tagList.textContent = "Tags: ";
  tagList.classList.add(
    "list-unstyled",
    "d-flex",
    "flex-wrap",
    "italic",
    "justify-content-center",
    "align-items-center"
  );
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
  const italicDiv = document.createElement("div");
  italicDiv.classList.add(
    "d-flex",
    "gap-3",
    "flex-wrap",
    "p-3",
    "justify-content-center",
    "align-items-center"
  );
  italicDiv.appendChild(tagList);
  italicDiv.appendChild(posted);

  const currentPrice = document.createElement("button");
  currentPrice.classList.add(
    "rounded",
    "text-white",
    "border",
    "p-1",
    "font-size",
    "bg-dark"
  );
  currentPrice.innerHTML = `<i class="bi bi-tag"></i>`;
  const bidsArr = [];
  content.bids.forEach((elem) => {
    bidsArr.push(elem.amount);
  });
  let highestBid = 0;
  if (bidsArr.length === 0) {
    highestBid = "No bids yet";
    currentPrice.textContent = "Current price: " + highestBid;
  } else {
    highestBid = Math.max(...bidsArr);
    currentPrice.textContent = "Current price: " + highestBid + "credits";
  }

  italicDiv.appendChild(currentPrice);
  div.appendChild(italicDiv);

  let img = document.createElement("img");
  if (content.media.length > 1) {
    const carouselId = `carousel-${1}`;
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
      imgLink.classList.add("imglink");
      imgLink.href = `../specificlisting/index.html?id=${content.id}`;

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
    imgLink.classList.add(
      "imglink",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    imgLink.href = `../specificlisting/index.html?id="${content.id}"`;

    img.src = content.media[0];
    img.classList.add("img-fluid", "w-100", "rounded", "max-vh-50");

    imgLink.appendChild(img);
    div.appendChild(imgLink);
  }

  div.appendChild(description);

  container.appendChild(div);
  const cardFooter = document.createElement("div");
  cardFooter.classList.add(
    "card-footer",
    "d-flex",
    "justify-content-around",
    "align-items-center",
    "gap-1"
  );
  const avatarLink = document.createElement("a");
  avatarLink.href = `../profile/index.html?pname=${content.seller.name}`;
  const avatar = document.createElement("img");
  if (data.seller.avatar === "" || data.seller.avatar === "null") {
    avatar.src = "../../../images/anonProfile.jpg";
  } else {
    avatar.src = data.seller.avatar;
  }
  avatar.classList.add("avatar", "rounded-circle", "img-thumbnail");

  const dueDate = document.createElement("p");
  const minutesAgo = parseInt(
    calculateMinutesAgo(new Date(content.endsAt), new Date()),
    10
  );

  if (minutesAgo < 0) {
    dueDate.textContent = "Due date: Expired";
  } else {
    dueDate.textContent = "Due date: in " + minutesAgo + " minutes";
  }

  dueDate.classList.add("rounded", "text-white", "border", "p-1", "font-size");
  const seller = document.createElement("ul");
  seller.classList.add(
    "d-flex",
    "flex-column",
    "justify-content-center",
    "p3",
    "meta",
    "list-unstyled"
  );

  const bidsSection = document.createElement("div");
  bidsSection.classList.add(
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "card-body",
    "w-100"
  );
  const bidsDiv = document.createElement("div");
  bidsDiv.classList.add(
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "w-100"
  );
  const bidBtn = document.createElement("div");
  const bidBtn1 = document.createElement("button");
  const bidBtn2 = document.createElement("button");
  bidBtn1.classList.add("btn", "btn-secondary", "w-100");
  bidBtn1.setAttribute("data-bs-toggle", "modal");
  bidBtn1.setAttribute("data-bs-target", "#exampleModal");
  bidBtn1.textContent = "Place bid";
  bidBtn.appendChild(bidBtn1);

  bidBtn2.classList.add("btn", "btn-secondary", "w-100", "placefastbid");
  bidBtn2.setAttribute("data-bs-toggle", "modal");
  bidBtn2.setAttribute("data-bs-target", "#exampleModal");
  bidBtn2.textContent = "Place fast bid";
  bidBtn.appendChild(bidBtn2);

  if (!localStorage.getItem("token")) {
    bidBtn1.disabled = true;
    bidBtn2.disabled = true;
    const notLoggedIn = document.createElement("p");
    notLoggedIn.classList.add("text-center", "text-danger");
    notLoggedIn.textContent = "Not logged in";
    bidsDiv.appendChild(notLoggedIn);
  }

  bidBtn.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "btn-group",
    "bid-btn-group"
  );

  if (content.bids.length > 0) {
    content.bids.forEach((elem) => {
      const bid = document.createElement("div");
      bid.classList.add("w-100", "rounded", "p-1", "my-3", "fs-6");
      const bidderName = elem.bidderName;
      bid.innerHTML = `
      <div class="card border-white mb-3 bg-dark">
      <div class="card-header">
      <h4 class="d-flex  card-title text-white fw-bold mb-0"> Bid:</h4>
      </div>
      <div class="card-body">
        <div class="d-flex flex-start">
          
          <div class="w-100">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h6 class="text-white fw-bold mb-0 font-size">
                ${bidderName}:
                <span class="text-white ms-2">Bid amount: ${
                  elem.amount
                } credits</span>
              </h6>
              <p class="mb-0 text-white font-size">${calculateMinutesAgo(
                new Date(),
                new Date(elem.created)
              )} ago</p>
            </div>
            
            <div class="d-flex justify-content-between align-items-center">
              <p class="small mb-0" style="color: #aaa;">
              
                
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="exampleModalLabel">Place Bid</h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input  type="number" class="form-control bidinput"> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-secondary btn-sendBid">Place bid!</button>
        </div>
      </div>
    </div>
  </div>
              </p>
              <div class="d-flex flex-row">
                <i class="fas fa-star text-warning me-2"></i>
                <i class="far fa-check-circle" style="color: #aaa;"></i>
              </div>
            </div>
          </div>
        </div>
      <div/>
    </div>
          `;
      bidsDiv.prepend(bid);
    });
  } else {
    const bid = document.createElement("div");
    bid.classList.add(
      "w-100",
      "rounded",
      "p-1",
      "my-3",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );

    bid.innerHTML = `
      
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="exampleModalLabel">Place Bid</h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input  type="number" class="form-control bidinput"> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-secondary btn-sendBid">Place bid!</button>
        </div>
      </div>
    </div>
  </div>
              
          `;
    bidsDiv.prepend(bid);
  }
  bidsDiv.prepend(bidBtn);

  bidsSection.appendChild(bidsDiv);
  div.appendChild(bidsSection);

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
  avatarLink.appendChild(avatar);

  cardFooter.appendChild(avatarLink);
  cardFooter.appendChild(seller);
  cardFooter.appendChild(dueDate);
  div.appendChild(cardFooter);

  const fastBidButton = document.querySelector(".placefastbid");
  const sendBidButtons = document.querySelectorAll(".btn-sendBid");
  const bidInput = document.querySelector(".bidinput");

  fastBidButton.addEventListener("click", (event) => {
    const bidsArr = content.bids.map((elem) => elem.amount);
    const highestBid = Math.max(...bidsArr);

    bidInput.value = highestBid + 1;
  });

  sendBidButtons.forEach((sendBidButton) => {
    sendBidButton.addEventListener("click", (event) => {
      const bidAmount = Number(bidInput.value);

      placeBid(`${baseUrl}listings/${content.id}/bids`, bidAmount);
    });
  });
  if (buttons !== undefined) {
    if (content.seller.name === localStorage.getItem("name")) {
      const editBtn = document.createElement("button");
      editBtn.setAttribute("data-bs-toggle", "modal");
      editBtn.setAttribute("data-bs-target", "#staticBackdrop2");

      const deleteBtn = document.createElement("button");
      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("btn-group");
      editBtn.classList.add("btn", "btn-warning");
      deleteBtn.classList.add("btn", "btn-danger");
      deleteBtn.setAttribute("data-bs-toggle", "modal");
      deleteBtn.setAttribute("data-bs-target", "#exampleModal3");

      editBtn.textContent = "Edit Post";
      deleteBtn.textContent = "Delete Post";
      buttonDiv.appendChild(editBtn);
      buttonDiv.appendChild(deleteBtn);
      const deleteModalBtn = document.querySelector(".delete-post-btn");
      deleteBtn.addEventListener("click", () => {
        deleteModalBtn.setAttribute("data-post-id", content.id);
      });
      deleteModalBtn.addEventListener("click", (event) => {
        const postId = event.target.getAttribute("data-post-id");
        deletePost(postId);
      });

      editBtn.addEventListener("click", () => {
        postParams(content.id);
      });

      div.appendChild(buttonDiv);
    } else {
      return;
    }
  } else {
    return;
  }
}
