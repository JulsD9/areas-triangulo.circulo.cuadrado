/// este es un comentario de una linea///

/*este es un comentario
multilinea


kasljfbasljfbsalf

*/

var Perrito
var perrito
var PERRITO

alert ("estoy vivo");

console.log("este es un mensaje para la consola");

var nombre = "Julio Cesar"
var apellidos = "Duran Navarro"
var edad = 28;

console.log(nombre,apellidos,edad);

alert("mi nombre es: " + nombre);
console.log("mis apellidos son: " + apellidos);

alert ("mi nombre es: " + nombre + "mis apellidos son: " + apellidos + " y mi edad es: " +edad);

// otro ejemplo de como mostrar variables en consola

var numero1 = 5;
var numero2 = 7;
var resultado = numero1 - numero2; 

console.log("el resultado de la suma es: " + resultado);

//sintaxis basicas de una funcion

function numberfunction(parametros){
    instrucciones;
}



//declaracion de function

function saludar(){
    alert ("hola a todos");
}

saludar();

///expresion de function

var cantar = function(){
    alert ("a mi me gusta cantar");
}
cantar();

///funcion sin parametros
function sumar (){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert ("la suma de la funcion sin parametros es: " + suma);
}

sumar();

//funcion con parametros
function restar (num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert ("la resta de la funcion con parametros es: " + resta);
}

restar();

//otra funcion con parametros

function cuadrado (cuadrado){
    var rescuadrado = cuadrado + cuadrado;
    alert ("el cuadrado del numero es: " + rescuadrado);
}

cuadrado(4);

function operaciones (num1, num2, num3, suma, resta, multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert ()
}

//funcion prompter

function prompter(){
    var respuesta = prompt("buenos dias, cual es tu nombre");
    alert ("es un gusto saludarte" + respuesta)
}

prompter();

function AreaCuadrado (){
    var datoingresado = prompt("Ingresa un numero");
    var resultado = datoingresado * datoingresado
    alert ("El area del cuadrado es " + datoingresado + "por que el numero que ingresaste es " + datoingresado);
}
AreaCuadrado();

//getElementID

function cambiarColor(nuevoColor){
    var elem = document.getElementById ("parrafo");
    elem.style.color = nuevoColor;
}
cambiarColor();
