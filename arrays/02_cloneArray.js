/*

  2. Write a JavaScript function to clone an array.
  Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
    [1, 2, 4, 0]
    [1, 2, [4, 0]]

*/

function array_Clone(arr) {
  //  *** Copias sin referencia en memoria ****
  // arr.slice(0) //otra forma, saco elementos desde el inicio
  return [... arr]
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));