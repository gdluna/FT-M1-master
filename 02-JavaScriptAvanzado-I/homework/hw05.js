var instructor = 'Tony';
let pm = 'Franco'; // let no hace hoisting
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
// pm no cambia por el "scope", el scope de let es bloque