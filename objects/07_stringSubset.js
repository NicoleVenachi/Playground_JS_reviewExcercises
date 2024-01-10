/* 

7. Write a JavaScript program that returns a subset of a string.
  Sample Data: dog
  Expected Output: ["d", "do", "dog", "o", "og", "g"]

  Subser de ir metiendo letras una a una 
*/



String.prototype.sub_string = function () {
  // this.split("") // paso string a array caracter por caracter
  var subset = []; //
  for (var m = 0; m < this.length; m++) // desde letra/pos 0 hasta la penuultima
  {
    
  
    for (var n = m+1; n<this.length+1; n++)  //desde letra/pos siguiente hasta la ultima
    {
      subset.push(this.slice(m,n)); //corto el string en ese rango/posiciones
    }
  }
  return subset;

}

let data = 'dog'

console.log(data.sub_string())
