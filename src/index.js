import { headerLoader, footerLoader } from "./header&footer";
import { homeLoader } from "./home";
import { menuLoader } from "./menu";
import { contactLoader } from "./contact";

headerLoader();
function switching() {
  document.querySelector(".home-btn").addEventListener("click", () => {
    homeLoader();
    switching();
    footerLoader();
  });

  document.querySelector(".menu-btn").addEventListener("click", () => {
    menuLoader();
    switching();
    footerLoader();
  });
}

switching();
