import { categoria, db } from "./utils/db.js";
import { toggleMenu, linkItem, slider } from "./utils/functions.js";

toggleMenu("toggleMenu", "open");
console.log(window.location.hash, "verificando o hashtag");

let titulo = "";
let destaque = "";
let subtitulo = "";

if (!window.location.hash) {
  titulo = db[0].titulo;
  destaque = db[0].destaque;
  subtitulo = db[0].subtitulo;
}

const domTitulo = document.querySelector("#titulo");
const domSubtitulo = document.querySelector("#subtitulo");
domTitulo.innerHTML = `${titulo} <span class="rio">${destaque}</span>`;
domSubtitulo.innerHTML = subtitulo;

const links = document.querySelector(".links");
const sliderItems = document.querySelector(".slider-items");
const arrow = links.querySelector(".arrow");

if (arrow) {
  console.log(db.length, "total de itens");
  db.forEach((item) => {
    //links.insertBefore(linkItem(item, categoria), arrow);
    sliderItems.appendChild(linkItem(item, categoria));
  });
}
let reference = 1;
////////////////////////////////////////////////////////
if (document.querySelector(".left-arrow")) {
  document.querySelector(".left-arrow").addEventListener("click", (e) => {
    ++reference;
    slider(reference, ".slider-items", 4);
    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").style.display = "flex";
    }
  });
}

///////////////////////////////////////////////////////
