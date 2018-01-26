
let numero = [1,2,3,4,5,6]

// for (var num in numero) {
//   console.log(numero[num]);
// }
//
//
// for (var i = 0; i < numero.length; i++) {
//   console.log(numero[i]);
// }

let lenguajes= ["ruby","javascript","php","python"];

//eliminar ruby
// lenguajes = lenguajes.filter(function(el){
//   return el != 'ruby';
// });

// lenguajes = lenguajes.filter((el)=>{return el != 'ruby'});
lenguajes = lenguajes.filter((el)=> el != 'ruby');

let elemento_encontrado = lenguajes.find((el)=>el == 'javascript')

// let numeroCuadra = numero.map((el)=>{
//   return el*el;
// });

let numeroCuadra = numero.map(numero => numero * numero);

console.log(numero);
console.log(numeroCuadra);

//console.log(elemento_encontrado);

// lenguajes.forEach(function(elemento){
//   console.log(elemento);
// })
