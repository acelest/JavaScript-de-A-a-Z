// let jean = 'blanc'

// switch(jean) {
//   case 'blanc':
//     console.log('10 euros');
//   break
//   case 'violet':
//     console.log('15 euros');
//   break
//   case 'orange':
//     console.log('20 euros')
//   break;

//   default: 
//   console.log('Nous avons pas cette couleur');
// }




// Exercice pratique :
 
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')



btn1.addEventListener('click',()=> {
 let valeur = btn1.value;
 switch(valeur) {
  case 'noir':
    alert('disponible dans 24h');
  break
  case 'blanc':
    console.log('pas disponible sorry');
  break
  case 'violer':
    console.log(' disponible plus que 5 ');
  break
  default: 
  console.log('Nous avons pas cette couleur merci ');
}
})

btn2.addEventListener('click',()=> {
 let valeur = btn2.value;
 switch(valeur) {
  case 'noir':
    alet ('disponible');
  break
  case 'blanc':
    alert('pas disponible sorry');
  break
  case 'violer':
    console.log(' disponible plus que 5 ');
  break
  default: 
  console.log('Nous avons pas cette couleur merci ');
}
})
btn3.addEventListener('click',()=> {
 let valeur = btn3.value;
 switch(valeur) {
  case 'noir':
    console.log('disponible');
  break
  case 'blanc':
    console.log('pas disponible sorry');
  break
  case 'violet':
    alert(' disponible plus que 5 ');
  break
  default: 
  console.log('Nous avons pas cette couleur merci ');
}
})



