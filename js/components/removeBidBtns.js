export default function removeBidBtns() {
  const bidDiv = document.querySelectorAll(".bid-btn-group");
  bidDiv.forEach((div) => {
    div.remove();
  });
}
