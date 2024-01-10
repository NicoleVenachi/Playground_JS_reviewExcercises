
/* 
8. Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )

*/

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let categories = new Set(arr1) //saco categorias creando un set

// let arrCategories = [...categories]//lo deuevlo a array (no lo necesito)

let jsonCategoriesAndCount = {} //creo un json donde almaceno las cateogrias y sus apariciones

categories.forEach( categorie => jsonCategoriesAndCount[categorie] = 0) //inicializo apariciones en 0

//recorro el array y cada que coincida con una key, le aumento su value en 1
arr1.forEach(element => jsonCategoriesAndCount[element]++)

console.log(jsonCategoriesAndCount);
// *** finalmente, simplemente recorro todos los pares key-entries e indico el mayor

let maxCount = 0 //almacenar repeticiones
let mostRepeated = void 0; //el mas repetido lo empiezo en undefined (aqui lamacenaré la feature)
for (const [key, value] of Object.entries(jsonCategoriesAndCount)) {
  if (value > maxCount) mostRepeated = {element: key, count: value};
}


console.log(mostRepeated);