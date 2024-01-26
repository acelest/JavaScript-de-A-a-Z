// function classique

function presentation () {
console.log("hello world");
}

presentation()


let prenom = 'jonathan' ;

function pren(prenom) {
  return prenom;
}

console.log(pren());

// Parametres

function calcul(nb1, nb2) {
  return nb1 + nb2
}

let age = calcul(3,10)

console.log(pren(prenom) + ' '  + age)

// function fleches

const functFlech = () => prenom;
const op = (nb1, nb2) => nb1 + nb2;



console.log(functFlech());
console.log(op(4,6));

// function callbacks
function Aubi(calcul) {
  calcul()
}



function funcCall (callback) {
  callback()
}

funcCall (function(){
  console.log('Hello j\'suis la function callback')
})

