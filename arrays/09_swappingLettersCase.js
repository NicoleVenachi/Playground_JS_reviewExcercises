/* 
  9. Write a JavaScript program that accepts a string as input and swaps the case of each character. 
  
  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

*/

let test = 'The Quick Brown Fox'

let testArr = test.split('') //hago string de cada caracter

let newArr = testArr.map(letter => 
  letter === letter.toUpperCase() ? 
  letter.toLowerCase() : letter.toUpperCase()
) //veeo si la letra es igual a ella misma en upper case, si es así, la volteo, sino la hago uppercase (i.e., una especie de metodo isUpperCase)

console.log(newArr.join('')); //paso de arr a string


