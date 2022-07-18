function homeElements() {
  const box = document.createElement("div");
  box.classList.add("box");
  const p1 = paragraphEditor("Best amongst all");
  const p2 = paragraphEditor("Served with love");

  const img = document.createElement("img");
  img.src = "./images/kawai-sushi.jpg";

  const p3 = paragraphEditor("visit us or order online");

  box.appendChild(p1);
  box.appendChild(p2);
  box.appendChild(img);
  box.appendChild(p3);

  return box;
}

function paragraphEditor(p) {
  const paragraphEle = document.createElement("p");
  paragraphEle.textContent = p;
  return paragraphEle;
}

function main() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  mainContent.appendChild(homeElements());

  return mainContent;
}

export { main };
