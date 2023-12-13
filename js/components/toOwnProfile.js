export default function hrefProfile() {
  if (localStorage.getItem("token")) {
    const toProfile = document.querySelector(".profile");
    const name = localStorage.getItem("name");

    toProfile.href = `../profile/index.html?pname=${name}`;
  }
}
