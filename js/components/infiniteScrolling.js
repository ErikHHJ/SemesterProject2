// infiniteScrolling.js

import getAuctions from "./getAuctions.js";
import loadContent from "./loadContent.js";
import { offset, modifyOffset } from "./getAuctions.js";

let currentSortBy = "created";
let currentSortOrder = "desc";

let observer;
let targetElement = document.querySelector("#loadMoreTrigger");

export function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("handleIntersection called");
      // Load more content with current sorting options
      getAuctions(10, currentSortBy, currentSortOrder);
    }
  });
}

// ... (rest of the code)

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

// Add a flag to track whether initial auctions have been loaded
let initialLoadComplete = false;

export function updateSortingOptions(sortBy, sortOrder) {
  currentSortBy = sortBy;
  currentSortOrder = sortOrder;

  modifyOffset(0);
  const container = document.querySelector(".container");

  // Check if initial load is complete
  if (!initialLoadComplete) {
    // If initial load is not complete, load the auctions
    console.log("Loading initial auctions");
    let isFetching = false;

    // ...

    // Inside the function where you handle scrolling or trigger the fetch
    function handleScroll() {
      // Check if a fetch operation is already in progress
      if (isFetching) {
        return; // If so, return and don't trigger another fetch
      } else {
        isFetching = true;
        getAuctions(10, currentSortBy, currentSortOrder);
      }

      // Set the flag to indicate that a fetch is in progress

      // Perform the fetch operation

      isFetching = false;
    }

    initialLoadComplete = true; // Set the flag to true
  } else {
    console.log("Initial load is complete, not loading initial auctions");
  }

  // Check if targetElement is a valid DOM element
  if (targetElement instanceof Element) {
    // Check if there's already an observer
    if (!observer) {
      console.log("Creating observer");
      observer = createObserver();
      console.log("Observing target");
      observer.observe(targetElement); // Observe the target
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
