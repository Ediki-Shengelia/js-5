"use strict";

//1.

let wraper = document.createElement("div");
wraper.classList.add("wraper");

let image = document.createElement("img");

image.setAttribute(
  "src",
  "https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg"
);
image.setAttribute("alt", "image");

let title = document.createElement("h2");
title.innerText = "image title";
title.classList.add("title");

title.style.fontSize = "30px";
title.style.color = "red";

wraper.appendChild(image);
wraper.appendChild(title);

document.getElementById("container").appendChild(wraper);

//2.
let divarray = document.querySelectorAll(".box");

divarray.forEach(function (item) {
  let text = document.createElement("p");
  text.innerText = "hello";
  text.classList.add("text");
  item.appendChild(text);
});
