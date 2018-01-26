//JSON

let curso = {
  title: "Curso Profesional de JavaScrip",
  duration:2.2,
  formato: 'video',
  bloque: ['Introduccion','Funciones'],
  inscribir: function(usuario){
    console.log(usuario + " ahora está inscrito");
  }
};

// console.log(curso.title);
// console.log(curso.inscribir('Omar'));
//
// curso.title = "Curso Base de Java Script";
//
// console.log(curso.title);


//funciones constructoras
function Curso(titulo){
  this.titulo = titulo;
  this.inscribir = function(usuario){
    console.log(usuario + " estás inscrito");
  }
}

// let cursoJavaScript = new  Curso("Curso Profesional de JavaScript");
// cursoJavaScript.inscribir("Omar");
//
// let cursoRuby = new Curso("Curso Profesional de Ruby");
//
// console.log(cursoRuby.titulo);
// console.log(cursoJavaScript.titulo);


//CLASES
// class Curso1{
//   constructor(titulo){
//     this.titulo = titulo;
//   }
//
//   inscribir(usuario){
//     console.log(usuario + " estas inscrito");
//   }
// }
//
// let ruby = new Curso1("Curso Profesional de ruby");
// console.log(ruby.titulo);
//mas recomendada
// let Curso = class{}
//
// let Usuario = class Usuario{}



// class Curso{
//   constructor(titulo,duration, color = 'yellow'){
//     //arguments
//     this.titulo = titulo;
//     this.duration = duration;
//     this.color  = 'yellow';
//   }
// }
//
// let ruby = new Curso("Curso JS");



//Herencia
// class Player{
//   play(){this.video.play();}
//   duration(){return this.video.duration / 100;}
// }
//
// class Vimeo extends Player{
//   open(){ this.redirectToVimeo(this.video);}
// }
//
// class Youtube extends Player{
//   open(){ this.redirectToYoutube(this.video);}
// }
//
// class Colecction extends Array{}
//
// /////EJemplo Extends
// class User{
//   constructor(usuario){
//     this.usuario = usuario;
//   }
//   saludar(){
//     console.log("hola " + this.usuario);
//   }
// }
//
//
// class Admin extends User{
//   constructor(nombre){
//     super(nombre);
//   }
//   saludar(){
//     super.saludar();
//     console.log("hola Administrador");
//   }
// }
//
//
// let omar = new Admin("Omar");
//
// omar.saludar();


// class Usuario{
//   constructor(nombre){
//     this._nombre = nombre;
//   }
//
//   get name(){
//     return this._nombre.charAt(0).toUpperCase() + this._nombre.slice(1);
//   }
//
//   set name(nombre){
//     this._nombre = nombre;
//   }
// }
//
// let user = new Usuario("marcos");
//
// user.name = "omar";
//
// console.log(user.name);

// user.nombre = "omar";
//
// console.log(user.nombre);


// class Usuario{
//   constructor(permiso='lectura'){
//     this.permiso = permiso;
//   }
//   static createAdmin()){
//     let user = new Usuario('administrador');
//     return user;
//   }
// }
//
// let administrador = Usuario.createAdmin();


function User(){
}

let user = new User();

console.log(user.__proto__);
