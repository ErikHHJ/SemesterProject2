export default function showError(errorMsg) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const error = document.createElement("h1");
  error.classList.add("error");
  error.innerHTML = errorMsg;
  container.prepend(error);
}
