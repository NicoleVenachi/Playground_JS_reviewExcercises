/*

  15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

*/

var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

function objToList(obj) {
  
  console.time('timing')
  // let newList = new Array(Object.keys(obj).length).fill(0)
  //creo array del tamaño del objecto y lo lleno con 0's (memory prealllocation)

  let newList = [] //sin memory preallocation


  let counter = 0; //pa probar con memory preallocation
  for (const [key, value] of Object.entries(obj)) {
    // newList[counter] = [key, value]
    // counter++;
    newList.push([key, value])
  }

  console.timeEnd('timing')

  // gana memorypreallocation pero para objetos grandes

  return newList
}

console.log(objToList(student))