const tab = [1,2,3,4,5,6]

// Pop, push, unshift, shift

// op = efface la derniere valeur d'un tableau
tab.pop()

// push = ajoute une valeur a la fin du tab
tab.push(50)

// shift = efface la premier valeur d'un tab
tab.shift(2)

// unshift = ajoute une valeur au debut du tab
tab.unshift(0)
 

console.log(tab);

//  ######### SPLICE ET SLICE

const tab2 = [1,2,3,4,5,6]
// splice permet d'ajouter ou suppr un element a l'aide de l'index donnee
// tab2.splice(5,1)
// index de depart, nombre de valeur / valeur
tab2.splice(0,0,156)

console.log(tab2);
console.log(tab2.slice(0,4));


// concat 

const tableau = [1,2,3,4]

const tableau2 = [5,6,7,8]

// const tableau3 = tableau + tableau2


const tableau4 = tableau.concat(tableau2)

console.log(tableau4);

// Flat

const tabMulti = [1,2,3,4,5,6,7,8]

console.log(tabMulti.flat());

// join = transofrme en chaine de caracte

const tableauString = ['jov', 'marie', 'aubin']
console.log(tableauString);
console.log(tableauString.join(''));