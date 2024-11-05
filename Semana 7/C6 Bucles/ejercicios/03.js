function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x > y){
    return x;
  }else if(y>x){
    return y;
  }else return "cualquiera de los dos";
}

console.log(obtenerMayor(16,16));

//module.exports = obtenerMayor;
