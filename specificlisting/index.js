import { baseUrl } from "../js/components/constant/baseUrl.js";
const container = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = baseUrl + `listings?id=${id}&_seller=true&_bids=true`;
