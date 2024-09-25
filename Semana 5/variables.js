//Ejercicio de Variables en js Declaración de variables con var
//Variables de tipo String no hay diferencia si uso comilla simple o doble
// este es el error var nombre : "Felipe";
//esta es la solicion
var nombre = "Felipe";
var ciudad = 'Ajalpan';
//Variables de tipo número
var entero = 90;
var negativo = -120;
var decimal = 19.67;
//Variables de tipo Booleano
var verdad = true;
var mentira = false;
//Variable de tipo Undifined
var noseeltipo;
//Variable Null
var nula = null;

//Operadores matematicos en js
//variables contenedoras
var num1, num2;
//Suma
num1 = 50;
console.log(50 + 5);
console.log(num1 + 5);
//Resta
num2 = 20;
console.log(num1-num2);
//División
console.log(250/num1);
console.log(num1/num2);
//Modulo
console.log(num1%num2);

//Prueba de precedencia
console.log(3 + 5 * 2 - 8 * 5 / 2);
console.log(3 / 2 + 5 * 4 - 3 + 100 / 2 * 4, "El resultado");
console.log("");
console.log("Segundo bloque de ejercicios operadores relacionales");

//Operadores de comparación o relacionales
//Ejemplos <,>,<=,>=,== y !=
console.log("4 es mayor que 7: ", 4 > 7);
console.log("4 es menor que 7: ", 4 < 7);
console.log("4 es mayor o igual que 7: ", 4 >= 7);
console.log("4 es nemor o igual que 7: ", 4 <= 7);
console.log("4 es igual que 7: ", 4 == 7);
console.log("4 es diferente a 7: ", 4 != 7);

//Igualdad vs igualdad extricta
console.log("Igualdad extricta");
console.log(3 == 3);
console.log(3 === 3);
console.log(3 == "3");
console.log(3 === "3");
console.log("BOB ESPONJA");
console.log(0 == "0");
console.log(0 == []);
console.log("0" == []);
console.log(true == 1);
console.log("Estrella",false === 0);

//Asociatividad
console.log("");
console.log("Asociatividad");
var a = 20;
var b = 22;
var c = (a = b) + 60;

console.log("Valor de a: ",a);
console.log("Valor de b: ",b);
console.log("Valor de c: ",c);

console.log(16 / 2 / 4);

//Nota las operaciones +,/,-,*,etc son de izq a derecha
//las comparaciones <,>,<=,>=,== y != son de derecha a izq

//Funciones en JS
//Ejemplo 1 decalarando una funcion sin parametros
function saludar(){
    console.log("Hola como estas, usaste la función saludar");
}

//Ejemplo 1 usando la funcion
saludar();saludar();saludar();saludar();saludar();saludar();saludar();

//Ejemplo 2 Encapsular los ejercicios anteriores
function operacionesComparacion(){
    console.log("4 es mayor que 7: ", 4 > 7);
    console.log("4 es menor que 7: ", 4 < 7);
    console.log("4 es mayor o igual que 7: ", 4 >= 7);
    console.log("4 es nemor o igual que 7: ", 4 <= 7);
    console.log("4 es igual que 7: ", 4 == 7);
    console.log("4 es diferente a 7: ", 4 != 7);
}

operacionesComparacion();

function igualdadExtricta(){
    console.log("Igualdad extricta");
    console.log(3 == 3);
    console.log(3 === 3);
    console.log(3 == "3");
    console.log(3 === "3");
    console.log("BOB ESPONJA");
    console.log(0 == "0");
    console.log(0 == []);
    console.log("0" == []);
    console.log(true == 1);
    console.log("Estrella",false === 0);
}

igualdadExtricta();

function suma(a, b) {
    return a + b;
}

var sumaDos = (x, y) => {
    return x + y;
  }

var rsuma = suma(10,9);
console.log(rsuma);

var rsuma2 = sumaDos(50,60);
console.log(rsuma2);

