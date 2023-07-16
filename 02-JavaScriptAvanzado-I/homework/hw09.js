var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined
console.log(test); // Función

// "console.log(obj.prop.getFullname())" devuelve "Aurelio De Rosa" porque al preguntarme "¿Quién está ejecutando esto?" la respuesta es la propiedad "prop" del objeto "obj", y el valor de "fullname" en la propiedad "prop" es precisamente "Aurelio De Rosa"

// "console.log(test())" devuvelve "undefined" porque en la asignación que se hace "var test = obj.prop.getFullname", "getFullname" es la definición de una función (no la llamada a la función) con lo cual "test" no tiene asociada o definida ninguna propiedad con el nombre "fullname".