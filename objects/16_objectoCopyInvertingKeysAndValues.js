/* 

  16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

*/

var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

function invertObject(obj) {
  let newObject = {}

  for (const [key,value] of Object.entries(obj)) {
    newObject[value] = key
  }

  return newObject
}

console.log(invertObject(student));