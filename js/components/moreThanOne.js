const moreThanOne = document.querySelector(".moreThanOne");
const mediaInputDiv = document.querySelector("#mediaInputDiv");
export default moreThanOne.onclick = () => {
  const newInput = document.createElement("input");
  newInput.classList.add("mediainput", "form-control", "my-1");
  newInput.type = "text";
  newInput.setAttribute("placeholder", "Enter image URL");
  newInput.setAttribute("name", "media");

  mediaInputDiv.appendChild(newInput);
};
