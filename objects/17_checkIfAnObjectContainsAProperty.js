/*

  17. Write a JavaScript function to check whether an object contains a given property.

*/

var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12,
  15: 15 
};

function propertyVerifier(obj, property) {

  // *** Con arrays
  // let allProps = Object.getOwnPropertyNames(obj)

  // let result = allProps.some(prop => prop == property)
  // no pongo tripe === por el formato en que pueden venir los props names

  // Con atributo direcamente

  let result = obj.hasOwnProperty(property)
  return result

}

console.log(propertyVerifier(student, 'namee'));

