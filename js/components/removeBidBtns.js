export default function removeBidBtns() {
  console.log("removeBidBtns");
  const bidDiv = document.querySelectorAll(".bid-btn-group");
  bidDiv.forEach((div) => {
    div.remove();
  });
}
