function saludar(){
  console.log("hola");
  document.write("Hola Mundo");
}

function cuadrado(numero){
  return numero*numero;
}

// saludar();
// document.write(cuadrado(5));

function sumar(){
  return arguments[0]+arguments[1]+arguments[2];
}

function demo(){
  console.log(this);
}

let obj = {
  demo: function(){
    console.log(this);
  }
}

let usuario = {
  nombre: "Omar",
  apellido: "Vasquez",
  nombreCompleto: function(){
    console.log(this.nombre + ' ' + this.apellido);
  }
}



let demo1 = ()=>{
  console.log("hola Mundo");
}

suma1 = (a,b)=> a + b;

console.log(suma1(1,5));
