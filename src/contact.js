function contactElements() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  const box = document.createElement("div");
  box.classList.add("contact-box");

  const para1 = document.createElement("p");
  para1.textContent = "Contact us @";

  //  const iconPhone = document.createElement("i");
  //  iconPhone.classList.add("fa-solid");
  //  iconPhone.classList.add("fa-phone");

  const para2 = document.createElement("p");
  para2.innerHTML = '<i class="fa-solid fa-phone"></i> Phone: 845-598-5406';

  const iFrame = document.createElement("div");
  iFrame.classList.add("map");
  iFrame.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.100074099026!2d-73.99295192292728!3d40.75047596100702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25854faa8d447%3A0x100a2b0d8c445c5f!2sCarmine&#39;s%20Italian%20Restaurant%20-%20Times%20Square!5e0!3m2!1sen!2sus!4v1658179578284!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  box.appendChild(para1);
  box.appendChild(para2);
  box.appendChild(iFrame);
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
