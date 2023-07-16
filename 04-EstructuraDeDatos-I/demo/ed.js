function factorial(num) {
  // * 5! --> 5 * 4!
  // * 4! --> 4 * 3!
  // * 3! --> 3 * 2!
  // * 2! --> 2 * 1!
  // * 1! --> 1

  if (num === 0 || num === 1) return num;

  facto = num * factorial(num - 1);
  console.log(facto);

  return facto;
}

console.log(factorial(5));

function sumaArreglo(arr) {
  iteraciones++;
  console.log(arr);
  
  if (arr.length === 0) return 0;
  else {
    const primerNumero = arr[0];
    const restoDelArreglo = arr.slice(1);
    
    console.log(primerNumero);
    console.log(restoDelArreglo);
    console.log(sumaArreglo(restoDelArreglo));
    
    return primerNumero + sumaArreglo(restoDelArreglo);
  }
}
var iteraciones = 0;
var arreglo = [15, 20, 32, 100];
console.log(arreglo.length);
console.log(sumaArreglo(arreglo));
console.log(iteraciones);

// punto de corte -> arr.length = 0
// [1, 2, 3, 4, 5]
// 1 + 2 + 3 + 4 + 5
// 1 + 

var persona1 = {
  nombre: "Pablito",
  apellido: "Cerúndulo",
  edad: 98,
}

var persona2 = persona1;

console.log(persona1);
console.log(persona2);

if (persona1 === persona2) {
  console.log("Son iguales");
}