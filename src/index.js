import { main } from "./home";
import { menuContentLoader } from "./menu";
//const content = document.getElementById("content");
//content.appendChild(homeElements());
import { header, footer } from "./header&footer";

const content = document.getElementById("content");

content.appendChild(header());

const homeBtn = document.querySelector(".home-btn");

//homeBtn.addEventListener("click", () => {
//content.appendChild(main());
content.appendChild(menuContentLoader());

content.appendChild(footer());
//});
