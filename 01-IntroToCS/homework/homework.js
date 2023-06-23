'use strict';

function BinarioADecimal(num) {
   let arrayNum = num.toString().split('');
   console.log(arrayNum);
   let i = arrayNum.length - 1;
   let j = 0;
   let numDecimal = 0;
   while (i >= 0) {
      numDecimal += parseInt(arrayNum[i],10)*2**j;
      i -= 1;
      j += 1;
   }

   return numDecimal;

}

console.log(BinarioADecimal(10111))

function DecimalABinario(num) {
   let division = num;
   let resto = 0;
   let arrayBinario = [];
   while (division > 0) {
      resto  = division % 2;
      arrayBinario.unshift(resto);
      division = Math.floor(division / 2);
   }
   arrayBinario = arrayBinario.join('');
   return arrayBinario;
}

console.log(DecimalABinario(29));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
