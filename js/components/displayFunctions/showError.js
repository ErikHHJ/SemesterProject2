export default function showError(errorMsg) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  const error = document.createElement("h1");
  error.classList.add(
    "error",
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-center",
    "p-3",
    "text-center"
  );
  error.innerHTML = errorMsg;
  container.prepend(error);
}
