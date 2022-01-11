//area triangulo
function areat(base, altura){
    var area = ((base * altura)/2)
    alert ("esta es la base del triangulo: " + area);
}

areat (3, 5);

//area cuadrado
function arearec(){
    var l1 = 3;
    var l2 = 5;
    var res = (l1 * l2);

    console.log("el area del rectangulo es: " + res);

    alert ("el area del rectangulo es: " + res);
}
arearec();

//area circulo con parametros

function areacir(radio){
    var resultado = (Math.PI * radio * radio);
        alert ("el area de rectangulo es: " + resultado);
}

areacir(3);