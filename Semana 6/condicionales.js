function viaje(destino){
    if(destino === "Brasil"){
        console.log("Gire a la Derecha");
    } else if(destino === "Argentina"){
        console.log("Gire a la Izquierda");
    } else {
        console.log("Nos Perdimos");
    } 
}

viaje("BRASIL");

function puedeManejar(edad){
    if(edad >= 18){
        console.log("Puede Manejar");
    } else{
        console.log("No Puede Manejar");
    }
}

puedeManejar(8);