/*

  3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
  Test Data :
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    Expected Output :
    7
    []
    [7, 9, 0]
    [7, 9, 0, -2]
    []

*/

function first(arr, nElems) {
  
  if (arr == null) return void 0; //sino viene array, SIEMPRE devuelvo UNDEFINED (void evalua expresion, y el numero 0 perse no devuelve nada sino eta en una expresion de asignacion, por ende, su valor es undefined) 

  if (!nElems) return arr[0]; //sino viene, retorno el primero
  if (nElems <0 ) return []; // si es negativo, nada

  return arr.slice(0,nElems); //si viene, corto hasta alli
  
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

console.log(first());