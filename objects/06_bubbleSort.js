/* 
6. Write a bubble sort algorithm in JavaScript.
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
  Sample Data: [6,4,0, 3,-2,1]
  Expected Output : [-2, 0, 1, 3, 4, 6]

*/

// al object array le agrego el método sort
Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    console.log(this); //this es esta instancia, es decir, en este caso, los vlores propios del array
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

let data = [6,4,0, 3,-2,1]

console.log(data.bubbleSort_algo());
