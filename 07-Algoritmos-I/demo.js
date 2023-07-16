// Una manera de medir la complejidad

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

const arr1 = [1, 3, 5, 6, 9, 4, 6, 7]; // n = 8
const arr2 = [2, 4, 3, 8, 7, 1, 9, 6, 5, 11]; // n = 10

let iteraciones = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        iteraciones ++;
        console.log(arr1[i] + arr2[j]);
    }
}

console.log(iteraciones);

// o(n * j) => o(8 * 10) = 80

// Si los arrays tienen el mismo tamaño o se itera en el mismo array en los dos ciclos for, entonces --> o(n * n) => n^2

// ---------------------------------------------------------------------------------------------------------------------//

