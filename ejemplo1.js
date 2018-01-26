function fibonacci(numero)
{
    var var1 = 0;
    var var2 = 1;
    var var3;

    //document.write(var1+"");
    //document.write(var2+"");

    for(var i=3; i <= numero;i++)
    {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        document.write(var3+" ");
    }
}


function parOImpar(numero){
  var num = numero;
  if(num%2 == 0){
    document.write("Numero Par ");
  }else{
    document.write("Numero ImPar ");
  }
}

//fibonacci(10);
// parOImpar(11);

function fibonaci2(numero){

  var num1 = 0;
  var num2 = 1;
  var num3;

  for(i = 1 ; i <= numero ; i++){
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
  }
}
// fibonaci2(4);
// fibonacci(4);


function sumar(num1, num2){
  console.log(num1+num2);
}

// var a = prompt();
// var b = prompt();

// sumar(parseInt(a),parseInt(b));



function numMagico(num){
  var numMagic =Math.ceil(Math.random()*100);
  console.log(numMagic + "<br>");
  if(num < numMagic){
    console.log("Tu numero es menor que numero magico")
  }else{
    console.log("Tu numero es mayor que numero magico")
  }
}
var numero = parseInt(prompt());
numMagico(numero);
