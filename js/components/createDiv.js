export default function createDiv() {
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
    "rounded",
    "bg-dark",
    "text-white"
  );
  return div;
}
