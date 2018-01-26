//
// const request = require('request');
//
// request('http://google.com',function(){
//   console.log('Termine la peticion de google');
// });
//
// console.log('Yo voy después de la petición a google');

const rp = require('request-promise');

////////Promise
//Estado de promesas
//fullfiled
//rejected
//pending
//setled
rp('http://google.com')
  .then(function(html){
    console.log('Termine la peticion de google');
  }).catch(function(er){
    console.log(er);
  });
