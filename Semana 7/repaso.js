//Declaración de Variables
//Forma 1 var las variables pueden cambiar tanto sus 
//valores como los tipos de datos
/*console.log("Ejemplos de variables con var");
var numero;
console.log(numero);
numero = 10;
console.log(numero);
numero = "Saludos";
console.log(numero);
numero = 34.6;
console.log(numero);

//Forma 2 let
console.log("");
console.log("Ejemplos de variables con let");
let numero2;
console.log(numero2);
numero2 = 10;
console.log(numero2);
numero2 = "Saludos";
console.log(numero2);
numero2 = 10.67;
console.log(numero2);

//Forma 3 asignación
console.log("");
console.log("Ejemplos de variables por asignación");
numero3 = undefined;
console.log(numero3);
numero3 = 10;
console.log(numero3);
numero3 = "Saludos";
console.log(numero3);
numero3 = 90.5;
console.log(numero3);

//OPeraciones aritmeticas
var num1, num2, res;
//Suma
console.log("");
console.log("Operaciones Basicas -  Suma");
num1 = 10;
num2 = 20;
res = num1 + num2;
console.log("El resultado de la suma es: " + res);

console.log("");
console.log("Operaciones Basicas -  Resta");
num1 = 10;
num2 = 20;
res = num1 - num2;
console.log("El resultado de la resta es: " + res);

console.log("");
console.log("Operaciones Basicas -  Mulltiplicación");
num1 = 10;
num2 = 20;
res = num1 * num2;
console.log("El resultado de la multiplicación es: " + res);

console.log("");
console.log("Operaciones Basicas -  División");
num1 = 10;
num2 = 20;
res = num1 / num2;
console.log("El resultado de la division es: " + res);

console.log("");
console.log("Operaciones Basicas -  Mod");
num1 = 10;
num2 = 20;
res = num1 % num2;
console.log("El resultado de mod es: " + res);

console.log("");
console.log("Operaciones ecuaciones");
console.log("2x+3y-90: ");
x=10;
y=20;
res = 2*x + 3*y -90;
console.log(res);

//Funciones en JS
console.log("Ecuación (3x+y)/z+7");
function eq1(x,y,z){
    x = (3*x + y) / (z + 7);
    console.log(x); 
}
eq1(4,6,8);

console.log("");
console.log("Ejemplo calcular el area de un circulo");
function areaCirculo(radio){
    return 3.1416 * (radio*radio);
}

areaC = areaCirculo(25);
console.log(areaC + "u2");
console.log("");

//Bucle While
let incremento = 1;
while(incremento < 3){
    console.log("Valor de incremento: " + incremento);
    incremento++;
}
*/

//Genera numeros hasta que valga 3

let min = 1;
let max = 200;
let randomIntegerInRange = 1;
//Genera aleatorio
randomIntegerInRange = Math.random();
console.log("Valor Aleatorio Generado: " + randomIntegerInRange);

//Al valor aleatorio le agrego un rango
randomIntegerInRange = Math.floor(randomIntegerInRange * (max - min + 1) + min);
console.log("Valor Aleatorio con floor y rango: " + randomIntegerInRange);

randomIntegerInRange = Math.floor(randomIntegerInRange);
console.log("Valor Aleatorio con floor: " + randomIntegerInRange);


while(randomIntegerInRange != 6){
randomIntegerInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Valores aleatorios: " + randomIntegerInRange); // Ejemplo: 8
}