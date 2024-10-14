/*//Declarar un arreglo
var listaSuper = [];
//Insertar un elemento en un indice x
listaSuper[5] = "Leche";
//Mostrar el elemento Leche dare el indice que conozco
console.log(listaSuper[5]);
//Mostrar todos los elementos del arreglo aqui no ocupo indice
//Solo uso el arreglo como una variable
console.log(listaSuper);
//Como mostrar el tamaño del arreglo metodo length
console.log(listaSuper.length);
//Llenar las posiciones del arreglo manual mente
listaSuper[0] = "Jamón";
listaSuper[1] = "Chiles";
listaSuper[2] = "Queso";
listaSuper[3] = "Refresco";
listaSuper[4] = "Shampo";
//Mostrar todos los elemetos imprimiendo el arreglo como estructura
console.log(listaSuper);
//Estraer la informacion del arreglo y procesarla
let obtener;
for (let x = 0; x<6; x++){
    obtener = listaSuper[x];
    console.log(obtener + " Producto de la lista número: " + (x + 1));
}

console.log("");

listaSuper[6] = "Salchicha";
listaSuper[7] = "Galletas";
listaSuper[8] = "Café";
listaSuper[9] = "Chocolate";
listaSuper[10] = "Atún";

//Mostrar todos lo elementos usando un length
for(x = 0; x<listaSuper.length; x++){
    obtener = listaSuper[x];
    console.log(obtener + " Nuevos elementos posición: " + (x + 1));
}


//Parte 2 metodos para arreglos
//Como agrear un elemento al final del arreglo con el metodo push
//Declarar de inicio elementos en arreglo
var colores = ["Rosa", "Amarillo"];
console.log(colores + " - Mostrar elementos del arreglo");
colores.push("Verde");
console.log(colores + " - Mostrar como se agrego al final el Verde");

//Como agregar un elemento al inicio del arreglo metodos unshift
colores.unshift("Rojo");
console.log(colores +  " - Mostrar como se agrego al inicio el Rojo");

//Como eliminar el ultimo elemento agregado en el arreglo metodo pop
colores.pop();
console.log(colores + " - Mostrar como se elimino el ultimo color Verde");

//Como eliminar el primer elemento agregado en el arreglo metodo shift
colores.shift();
console.log(colores + " - Mostrar como se elimino el primer color Rojo");
*/

//Ejemplos con include y con every para busqueda y condicion
var personas = ["José", "Pedro", "María", "Karla", "Rosa", "Carlos"];
//Ejemplo con include preguntar si el arreglo contienen un dato
var incluye = personas.includes("Manuel");
console.log(personas);
console.log("Esta el nombre Manuel en el arreglo: " + incluye);
incluye = personas.includes("Karla");
console.log("Esta el nombre Karla en el arreglo: " + incluye);

//Ejemplo con every pregunta si todos los elementos son diferentes a manuel
incluye = personas.every((respuesta) => {
    return respuesta != "Manuel";
});
console.log("Ninguno de los elementos es igual a Manuel: " + incluye);

//Ejemplo con every pregunta si algun elemento es igual a Carlos
incluye = personas.every((respuesta) => {
    return respuesta != "Carlos";
});
console.log("Todos los elementos son iguales a Carlos: " + incluye);

