const req = require('request');



function leer(url){
  return new Promise(function(resolve,reject){
    //aqui
    req(url,function(err, reponse){
      if(err){
        reject(err);
      }else{
        resolve(reponse);
      }
    });
  });
}

leer('http://google.com')
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  });

// function asincrono(){
//   return new Promise(function(resolve,reject){
//     resolve('Todo salio bien'); //marca la promesa como fullfiled
//     reject(new Error('No se pudo completar'));
//   });
// }
