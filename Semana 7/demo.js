/*isMember = false;
console.log("La Cuota es de:  " + (isMember ? "$2.00" : "$10.00"));

cliente = true;
importe = 6000;
formaPago = "Efectivo";

//Sin Operador Logico
if(cliente == true){
    if(importe > 5000){
        if(formaPago == "Efectivo"){
            console.log("Tiene descuento");
        }else{
            console.log("Necesitas pagar en efectivo");
        }
    }else{
        console.log("Necesitas un importe mayor a $5,000.00");
    }
}else{
    console.log("Necesitas ser Cliente");
}

//Con operadores Logicos
if(cliente == true && importe > 5000 && formaPago=="Efectivo"){
    console.log("Tiene descuento");
}else{
    console.log("No Tienes el descuento");
}

function funcionAnd(num){
    if (num > 10  && num % 2 ===0) {console.log(true);
    }else {console.log(false);
}}
funcionAnd(11); 

function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

 // NOT
function negacion(permiso) {
    permiso ? console.log('Tiene permiso') : console.log('No Tiene permiso'); 
 }
 negacion(true);
 negacion(false);
 negacion(false);
 negacion(false);
 negacion(true);

 //Ciclos en JS
 for(let x = 1; x<100; x++){
    console.log(x);
 }

 for(let x = 1; x<11; x++){
    console.log("2 x " + x + " = " + x*2);
 }

 function tabladel(num){
    for(let x = 1; x<11; x++){
        console.log(num + " x " + x + " = " + x*num);
    }
 }

 tabladel(856);

 for (let x = 1; x !== 11; x++){
    for (let y = 1; y !== 11; y++){
        console.log(x + " X " + y + " = " + x * y);
    }
 } */

function tablasDelAl(num1, num2){
    for (let x = num1; x !== num2 + 1; x++){
        for (let y = 1; y !== 11; y++){
            console.log(x + " X " + y + " = " + x * y);
        }
    }
}

tablasDelAl(2, 6);
