function itesmsLoader() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const item1 = itemContentAdd(
    "./images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item2 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item3 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item4 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item5 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item6 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item7 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );
  const item8 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Burger",
    "something something"
  );

  menu.appendChild(item1);
  menu.appendChild(item2);

  menu.appendChild(item3);
  menu.appendChild(item4);
  menu.appendChild(item5);
  menu.appendChild(item6);
  menu.appendChild(item7);
  menu.appendChild(item8);

  return menu;
}

function itemContentAdd(img, itemName, details) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("items");

  const image = document.createElement("img");
  image.src = `${img}`;

  const itemNameH4 = document.createElement("h4");
  itemNameH4.textContent = `${itemName}`;

  const detailsPara = document.createElement("p");
  detailsPara.textContent = `${details}`;

  itemDiv.appendChild(image);
  itemDiv.appendChild(itemNameH4);
  itemDiv.appendChild(detailsPara);

  return itemDiv;
}

function menuContentLoader() {
  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  mainContent.appendChild(itesmsLoader());
  return mainContent;
}

export { menuContentLoader };
