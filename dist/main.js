(()=>{"use strict";function e(e,t,n){const d=document.createElement("div");d.classList.add("items");const i=document.createElement("img");i.src=`${e}`;const a=document.createElement("h4");a.textContent=`${t}`;const s=document.createElement("p");return s.textContent=`${n}`,d.appendChild(i),d.appendChild(a),d.appendChild(s),d}const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("div");e.classList.add("navbar");const t=document.createElement("div");t.classList.add("heading"),t.textContent="Eat Whatever You Want";const n=document.createElement("div");n.classList.add("links");const d=document.createElement("ul");d.classList.add("buttons-ul");const i=document.createElement("li"),a=document.createElement("button");a.classList.add("home-btn"),i.appendChild(a),a.textContent="home";const s=document.createElement("li"),o=document.createElement("button");o.classList.add("menu-btn"),s.appendChild(o),o.textContent="menu";const c=document.createElement("li"),m=document.createElement("button");return m.classList.add("contact-btn"),c.appendChild(m),m.textContent="contact",d.appendChild(i),d.appendChild(s),d.appendChild(c),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}()),document.querySelector(".home-btn"),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("main-content"),t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu");const n=e("./images/pizza.jpg","Burger","something something"),d=e("../dist/images/pizza.jpg","Burger","something something"),i=e("../dist/images/pizza.jpg","Burger","something something"),a=e("../dist/images/pizza.jpg","Burger","something something"),s=e("../dist/images/pizza.jpg","Burger","something something"),o=e("../dist/images/pizza.jpg","Burger","something something"),c=e("../dist/images/pizza.jpg","Burger","something something"),m=e("../dist/images/pizza.jpg","Burger","something something");return t.appendChild(n),t.appendChild(d),t.appendChild(i),t.appendChild(a),t.appendChild(s),t.appendChild(o),t.appendChild(c),t.appendChild(m),t}()),t}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.innerHTML="Copyright &copy Novachoas",e}())})();