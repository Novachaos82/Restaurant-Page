import { headerLoader, footerLoader, defaultPageLoad } from "./header&footer";
import { homeLoader } from "./home";
import { menuLoader } from "./menu";
import { contactLoader } from "./contact";

const content = document.getElementById("content");

defaultPageLoad();
function switching() {
  document.querySelector(".home-btn").addEventListener("click", () => {
    content.innerHTML = "";
    headerLoader();
    homeLoader();
    //switching();
    footerLoader();
    switching();
  });

  document.querySelector(".menu-btn").addEventListener("click", () => {
    content.innerHTML = "";
    headerLoader();
    menuLoader();
    //switching();
    footerLoader();
    switching();
  });

  document.querySelector(".contact-btn").addEventListener("click", () => {
    content.innerHTML = "";
    headerLoader();
    contactLoader();
    //switching();
    footerLoader();
    switching();
  });
}

switching();
