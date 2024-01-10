/* 

  4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
  Test Data :
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));
    Expected Output :
    -2
    [9, 0, -2]
    [7, 9, 0, -2]

*/

function last(arr, nElems) {
  
  if (arr == null) return void 0; //sino llega array, devulevo undefined

  if (!nElems) return arr[arr.length-1]; //sino especifica #Elems, devuelvo el ultimo

  return arr.slice(-nElems)//si viene, los n ultimos
}


console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));