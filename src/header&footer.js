import { homeLoader } from "./home";

function header() {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const heading = document.createElement("div");
  heading.classList.add("heading");
  heading.textContent = "Eat Whatever You Want";

  const links = document.createElement("div");
  links.classList.add("links");

  const unorderList = document.createElement("ul");
  unorderList.classList.add("buttons-ul");

  const list1 = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  list1.appendChild(homeBtn);
  homeBtn.textContent = "Home";

  const list2 = document.createElement("li");
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  list2.appendChild(menuBtn);
  menuBtn.textContent = "Menu";

  const list3 = document.createElement("li");
  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contact-btn");
  list3.appendChild(contactBtn);
  contactBtn.textContent = "Contact";

  unorderList.appendChild(list1);
  unorderList.appendChild(list2);
  unorderList.appendChild(list3);

  links.appendChild(unorderList);

  navbar.appendChild(heading);
  navbar.appendChild(links);

  return navbar;
}

function footer() {
  const footerContent = document.createElement("div");
  footerContent.classList.add("footer");
  footerContent.innerHTML = `Copyright &copy 2022 Bhavesh   <a href="https://github.com/Novachaos82"><i class="fa-brands fa-github"></i></a>`;

  return footerContent;
}

const headerLoader = function () {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(header());
};

const footerLoader = function () {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(footer());
};

const defaultPageLoad = function () {
  headerLoader();
  homeLoader();
  footerLoader();
};
export { headerLoader, footerLoader, defaultPageLoad };
