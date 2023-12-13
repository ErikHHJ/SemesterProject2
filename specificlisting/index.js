import { baseUrl } from "../js/components/constant/baseUrl.js";
import hrefProfile from "../js/components/toOwnProfile.js";
document.addEventListener("DOMContentLoaded", function () {
  hrefProfile();
});

import specificListingFetch from "../js/components/specificListingFetch.js";
import redName from "../js/components/loginOrLogout.js";
redName();
specificListingFetch();
