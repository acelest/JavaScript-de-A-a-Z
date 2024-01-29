const title1 = document.querySelector("h1");
const title2 = document.querySelector("h2");
const box = document.querySelector("box");
const p = document.querySelector("p");
const liste = document.querySelector("ul");
const img = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("#test");
const button = document.querySelector("button");

// innerText = permet de add du texte ;
title1.innerHTML = `je suis du texte ajoute`;

// textContent = pour ajouter du texte
title2.textContent = `je suis aubin`;

// NB : POURQUOI UTILISER `` (CAR ON PEUT FAIRE REFERENCE A DES VARIABLES..)

// innerHTML = pour ajouter du code HTML
// box.innerHTML = `<p>Hello les devs</p>`;

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

let child = liste.children[0];
console.log(child);
