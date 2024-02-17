const liste = document.querySelector('ul')
const items = document.querySelectorAll('li')

// children = pour select tous les enfants 

console.log(liste.children);

// childNodes = renvoie tout les noeuds du parent, text correspond 
// aux espaces qui sont des noeuds 

console.log(liste.childNodes);

// parentElement = renvoie le parent du parent

console.log(liste.parentElement);

// nextElementSibling = noeud frere qui suit mon element

console.log(liste.nextElementSibling);

// nextSibling
console.log(liste.nextSibling);

// previousElement

console.log(liste.previousElementSibling);

// lastelementchild 

console.log(liste.lastElementChild);

// first element child

console.log(liste.firstElementChild);
