import getAuctions from "../js/components/getAuctions.js";
import loadContent from "../js/components/displayFunctions/loadContent.js";
import showMoreBtn from "../js/components/showMoreBtn.js";
import loginOrLogout from "../js/components/loginOrLogout.js";
import sortRecently from "../js/components/sorting/sortRecently.js";
import sortEndingSoon from "../js/components/sorting/sortEndingSoon.js";
import moreThanOne from "../js/components/moreThanOne.js";
import newPost from "../js/components/newPost.js";
import sortByTag from "../js/components/sorting/sortByTag.js";

import {
  handleIntersection,
  createObserver,
  updateSortingOptions,
  observeTarget,
  disconnectObserver,
} from "../js/components/infiniteScrolling.js";

const targetElement = document.querySelector("#loadMoreTrigger");
const observer = createObserver();
observer.observe(targetElement);
