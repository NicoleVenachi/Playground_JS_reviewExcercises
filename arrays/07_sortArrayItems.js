
/* 
  7. Write a JavaScript program to sort the items of an array.
  Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
  Sample Output : -4,-3,1,2,3,5,6,7,8

*/

let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// arr1.sort() //directo no serivria tan bien porque hay egativos
arr1.sort((a,b)=> a-b) //ascendign order (siempre vale la pena verificar con esta técnica)

console.log(arr1);
