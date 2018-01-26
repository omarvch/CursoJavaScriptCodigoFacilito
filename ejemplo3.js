
function executor(funcion){
  // funcion.call(tutor);
  // funcion.apply(tutor);
  funcion();
}

let tutor = {
  nombre: "omar",
  apellido: "Vasquez",
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}

// tutor.nombreCompleto();
//executor(tutor.nombreCompleto);
executor(tutor.nombreCompleto.bind(tutor));


function saluda(nombre){ console.log("hola " + nombre);}


saluda.apply(window,["uriel"]);
