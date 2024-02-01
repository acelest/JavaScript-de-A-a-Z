const title1 = document.querySelector("h1");
const title2 = document.querySelector("h2");
const box = document.querySelector("box");
const p = document.querySelector("p");
const liste = document.querySelector("ul");
const img = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("#text");
const button = document.querySelector("button");

// innerText = permet de add du texte ;
title1.innerHTML = `je suis du texte ajoute`;

// textContent = pour ajouter du texte
title2.textContent = `je suis aubin`;

// innerHTML = pour ajouter du code HTML
// box.innerHTML = `<p>Hello les devs</p>`;

//--------- NB : POURQUOI UTILISER `` (CAR ON PEUT FAIRE REFERENCE A DES VARIABLES..)---------

// creer des elements html

let newLI = document.createElement("li");
newLI.innerText = `Nouvelle liste`;
liste.appendChild(newLI);

// ajouter un elemt dans la liste
button.addEventListener("click", () => {
  let newLI = document.createElement("li");

  newLI.innerText = `Nouvelle liste`;
  liste.appendChild(newLI);
});

// replaceWith = pour choisir l'odre de mon element
liste.children[1].replaceWith(newLI);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = input.value; // This line might be causing the error
  console.log(val);

  title1.innerText = `${val}`;
});

// recuperer les coordonnees de la souris

const cor = document.querySelector(".cor");
console.log(cor);

let x = 0;
let y = 0;

window.addEventListener("mousemove", (even) => {
  x = even.clientX;
  y = even.clientY;

  cor.textContent = `x : ${x} Y: ${y} `;
});
