/*
  13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

*/

// Creemos objeto para verificar
function Student(name) {
  this.name = name;
}

//en su prototype metamos algo adicional
Student.prototype.adicional = true;

const newStudent = new Student('Sara'); //creeemos objeto de la clase Student
console.log(Object.getOwnPropertyNames(newStudent)); //prps/features/key names
console.log(Object.getPrototypeOf(newStudent)); // inherited properties

// Veamos también con objeto Array
console.log(Object.getOwnPropertyNames(Array)); //prps names
console.log(Object.getPrototypeOf(Array)); // inherited properties

// Creemos objeto array y veamos que
const arrNew = new Array(1,2,3); //mismo que hacer = [1,2,3]
console.log(arrNew);

console.log(Object.getOwnPropertyNames(arrNew)); //prps names
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arrNew))); // .__proto__ tambiene s un getter del proto

