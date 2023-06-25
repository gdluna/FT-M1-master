var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false)); // undefined
// console.log(getFood(true)); // Friskies

// Devuelve "undefined" porque la primera "var snack" forma larte del lexical enviroment del contexto global, luego la función "getFood" tiene su propio lexical enviroment y en éste se encuentra la definición de otra "var snack" que, por más que no ingrese a su definición (por el false del if), ya forma parte del lexical enviroment de la función, con lo cual al retornar "snack" se retorna el "snack" del lexical enviroment de getFood y éste snack aún no se definió y por ello se retorna "undefined".