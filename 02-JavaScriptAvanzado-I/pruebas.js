function hola() {
  console.log("hola");
  return "Result";
}

hola.saludo = "Buen Día";
console.log(hola);
console.log(hola());
console.log(hola.saludo);

(function (nombre) {
  console.log(nombre);
})("Toni")