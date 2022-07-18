function contactElements() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const box = document.createElement("div");
  box.classList.add("contact-box");

  const para1 = document.createElement("p");
  para1.textContent = "contact us @";

  //  const iconPhone = document.createElement("i");
  //  iconPhone.classList.add("fa-solid");
  //  iconPhone.classList.add("fa-phone");

  const para2 = document.createElement("p");
  para2.innerHTML = '<i class="fa-solid fa-phone"></i> phone: 9131580353';

  box.appendChild(para1);
  box.appendChild(para2);

  contactDiv.appendChild(box);

  return contactDiv;
}

function contactMainContent() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.appendChild(contactElements());

  return mainContent;
}

const contactLoader = function () {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(contactMainContent());
};

export { contactLoader };
