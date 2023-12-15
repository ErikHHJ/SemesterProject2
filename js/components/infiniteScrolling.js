import getAuctions from "./getAuctions.js";
import loadContent from "./displayFunctions/loadContent.js";
import { offset, modifyOffset } from "./getAuctions.js";

let currentSortBy = "created";
let currentSortOrder = "desc";
let currentTag = "";

let observer;
let targetElement = document.querySelector("#loadMoreTrigger");

export function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      getAuctions(10, currentSortBy, currentSortOrder, currentTag);
    }
  });
}

export function createObserver() {
  if (!observer) {
    observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });
  }
  return observer;
}

export function observeTarget() {
  if (targetElement && observer) {
    observer.observe(targetElement);
  }
}

export function disconnectObserver() {
  if (observer) {
    observer.disconnect();
  }
}

let initialLoadComplete = false;

export function updateSortingOptions(sortBy, sortOrder, tag) {
  currentSortBy = sortBy;
  currentSortOrder = sortOrder;
  currentTag = tag;

  modifyOffset(0);
  const container = document.querySelector(".container");

  if (!initialLoadComplete) {
    console.log("Loading initial auctions");
    let isFetching = false;

    function handleScroll() {
      if (isFetching) {
        return;
      } else {
        isFetching = true;
        if (sortBy && sortOrder) {
          getAuctions(10, currentSortBy, currentSortOrder, undefined);
        } else {
          getAuctions(10, undefined, undefined, currentTag);
        }
      }

      isFetching = false;
    }

    initialLoadComplete = true;
  } else {
    console.log("Initial load is complete, not loading initial auctions");
  }

  if (targetElement instanceof Element) {
    if (!observer) {
      console.log("Creating observer");
      observer = createObserver();
      console.log("Observing target");
      observer.observe(targetElement);
    } else {
      console.log("Observer already exists, not connecting again");
    }
  } else {
    console.error("targetElement is not a valid DOM element");
  }
}

export function setTargetElement(element) {
  targetElement = element;
}
