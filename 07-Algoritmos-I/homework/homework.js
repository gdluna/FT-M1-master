"use strict";
// No cambies los nombres de las funciones.

function primoSiguiente(primoAnterior) {
  let salir = false;
  let auxPrimoSiguiente = primoAnterior;
  while (!salir) {
    auxPrimoSiguiente ++;
    let esPrimo = true;
    for (let i = auxPrimoSiguiente; i >= 1; i--) {
      if (auxPrimoSiguiente % i === 0 && i !== auxPrimoSiguiente && i !== 1) {
        esPrimo = false;
        break;
      }
    }
    if (esPrimo) {
      salir = true;
    }
  }
  return auxPrimoSiguiente
}

let nuevoPrimo = primoSiguiente(13);
console.log(nuevoPrimo);

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let primo = 2;
  let arrayFactorear = [1];
  do {
    if (num%primo === 0) {
      num = num/primo;
      arrayFactorear.push(primo);
    } else {
      primo = primoSiguiente(primo);
      console.log(primo);
    }
  } while (num>=primo);
  return arrayFactorear;
}

let arrayFactorer = factorear(180);
console.log(arrayFactorer);

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [5, 2, 1, 7, 8, 3];
  //  i
  //     j

  let aux = null;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] >= array[j]) {
        aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}

let arr1 = [5, 2, 1, 7, 8, 3];
console.log(bubbleSort(arr1));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [2, 1, 5, 7, 8, 3]
  //     i
  //     j
  // aux =

  /* let aux = null;
    for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (array[j-1] > array[j]) {
        aux = array[j];
        array[j] = array[j-1];
        array[j-1] = aux;
      }
    }
  } */

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }

  return array;
}

let arr2 = [5, 2, 1, 7, 8, 3];
console.log(insertionSort(arr2));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [1, 2, 5, 7, 8, 3]
  //  i
  //  j
  //  x
  // min = 
  // minPosicion = 
  // aux = 
  // index = 

  let min = null; // Guarda el valor mínimo del recorrido del array
  let minPosicion = null; // Guarda la posición donde se encontró el mínimo
  let aux = null; // Variable auxiliar para realizar el intercambio de valores
  let index = 0; // Posición en la cual se va ubicando el mínimo que se encuentra en cada recorrido
  for (let i = 0; i < array.length; i++) {
    index = i;
    for (let j = i; j < array.length; j++) {
      if (!min || min > array[j]) {
        min = array[j];
        minPosicion = j;
      }
    }
    aux = array[index];
    array[index] = min;
    array[minPosicion] = aux;
    min = null;
    ;
  }
  return array;
}

let arr3 = [5, 2, 1, 7, 8, 3];
console.log(selectionSort(arr3));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
