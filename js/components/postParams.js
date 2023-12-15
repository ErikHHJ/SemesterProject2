import newPost from "../components/newPost.js";
import updatePost from "../components/updatePost.js";
const postBtn = document.querySelector("#postbtn");
export default function postBtnClick(id) {
  postBtn.onclick = () => {
    const mediaInputs = document.querySelectorAll(".mediainput");
    const tagsInput = document.querySelector("#tagsinput");
    const dateString = document.querySelector("#endsAt").value;
    const selectedDate = new Date(dateString);
    const formattedString = selectedDate.toISOString();
    try {
      const arr = tagsInput.value.split(" ");
      const mediaValues = [];
      mediaInputs.forEach((input) => {
        if (input.value.trim === "") {
          return;
        } else {
          mediaValues.push(input.value.trim());
        }
      });
      const info = {
        title: document.querySelector("#titleinput").value.trim(),
        description: document.querySelector("#bodyinput").value.trim(),
        endsAt: formattedString,
        tags: arr,
        media: mediaValues,
      };
      console.log(info);
      if (id) {
        console.log("id detected");
        updatePost(info, id);
      } else {
        newPost(info);
        console.log("no id detected");
      }
    } catch (error) {
      console.log(error);
      const modalContent = document.querySelector(".modal-content");
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("text-danger", "p-3");
      errorDiv.innerHTML =
        "There was an error posting, try with another image link";
      modalContent.appendChild(errorDiv);
    }
  };
}
