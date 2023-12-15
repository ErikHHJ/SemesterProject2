const loginOrLogout = document.querySelector(".loginOrLogout");
export default function redName() {
  if (localStorage.getItem("token")) {
    loginOrLogout.href = "#";
    loginOrLogout.innerHTML = "Logout";
    loginOrLogout.style.color = "red";
    loginOrLogout.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      window.location.href = "../index.html";
    });
  }
}
