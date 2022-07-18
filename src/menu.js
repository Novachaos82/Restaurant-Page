function itemsLoader() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const item1 = itemContentAdd(
    "./images/burger.jpg",
    "Burger",
    "Happiness is Homemade!"
  );
  const item2 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Pizza",
    "high-quality ingredients"
  );
  const item3 = itemContentAdd(
    "../dist/images/ramen.jpg",
    "Ramen",
    "A stir-fry egg noodle dish packed with fresh vegetables"
  );
  const item4 = itemContentAdd(
    "./images/burger.jpg",
    "Burger",
    "Happiness is Homemade!"
  );
  const item5 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Pizza",
    "high-quality ingredients"
  );
  const item6 = itemContentAdd(
    "../dist/images/ramen.jpg",
    "Ramen",
    "A stir-fry egg noodle dish packed with fresh vegetables"
  );
  const item7 = itemContentAdd(
    "./images/burger.jpg",
    "Burger",
    "Happiness is Homemade!"
  );
  const item8 = itemContentAdd(
    "../dist/images/pizza.jpg",
    "Pizza",
    "high-quality ingredients"
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

  mainContent.appendChild(itemsLoader());
  return mainContent;
}

const menuLoader = function () {
  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(menuContentLoader());
};

export { menuLoader };
