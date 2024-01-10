/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  Sample object:
  var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 };
*/

var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

let newOject = {}
let undesiredProperty = 'rollno'

// let studentFeatures = Object.keys(student)

//  --- con delete
delete student[undesiredProperty]
console.log(student);


// --- con for
// for (const key in student) {
//   if (key == undesiredProperty) {continue};

//   // con spread notation
//   newOject = {
//     ...newOject,
//     [key]:  student[key]
//   }

//   // newOject[key] = student[key]
// }

// console.log(newOject);
