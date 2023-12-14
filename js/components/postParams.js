import newPost from "../components/newPost.js";
import updatePost from "../components/updatePost.js";
const postBtn = document.querySelector("#postbtn");
export default function postBtnClick(id) {
  postBtn.onclick = () => {
    console.log("hei");
    const mediaInputs = document.querySelectorAll(".mediainput");
    const tagsInput = document.querySelector("#tagsinput");
    const dateString = document.querySelector("#endsAt").value;
    const selectedDate = new Date(dateString);
    const formattedString = selectedDate.toISOString();

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
  };
}
