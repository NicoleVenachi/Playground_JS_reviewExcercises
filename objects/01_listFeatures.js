/*

1. Write a JavaScript program to list the properties of a JavaScript object.

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

// --- con for in
for (const key in student) {
  console.log(key);
}

// --- sacando las keys

const studentFeatures = Object.keys(student);
studentFeatures.forEach(feature => console.log(feature))
