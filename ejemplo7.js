let numeros = [7,9,4];

function sumar(n1,n2,n3){
  return n1+n2+n3;
}


//let resultado = sumar.apply(this,numeros);
let resultado = sumar(...numeros);

//console.log(resultado);

let otroArreglo = ["hola mundo","chau mundo"];


//console.log([...numeros,...otroArreglo]);

let usuario = {
  nombre: 'Omar',
  edad: 30
}

for(propiedad in usuario){
  console.log(propiedad);
}
