/*
  6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number (pair of even numbers, básciament epartir al haber 2 even seguidos). 
  
  For example if you accept 025468 the output should be 0-254-6-8.

*/

let number = '025468';

let strNum = String(number)

let arr = [] //empty array to store splittings

//ya que es por pairs, necesito el actual y el anterior
//voy a buscar donde hacer los splittings
//empiezo en 1, y le resto 1 al size para evaluar siempre el actual y el anterior (e.g., 1 y 0)

let previousSplittingIdx = 0 //al principio, debo cortar desde posicion o
for (let idx = 1; idx < strNum.length; idx++) {
  
  if ((strNum[idx-1]%2 == 0) && (strNum[idx]%2 == 0)) {
    //check dsi actual y anterior son even

    arr.push(strNum.slice(previousSplittingIdx, idx)) //corto justo entre el aterior splititng y ell idx del siguiente even.
    // Eso entre anterior y actual lo meto al array,
  
    // y DEJO punto inical para empezar siguiente corte  
    previousSplittingIdx = idx //actualizo, que sepa que el último splitting lo hizo justo en ese espacio actual
    // console.log(strNum[idx]); //podria hacerlo soolo con esto, pero suaría mas for's

    if (idx == strNum.length -1) {
      //sino hay más elemetos siguietes, el último corte será solo el elemnto final
      arr.push(strNum[idx])
    }
  }

  else continue
}

console.log(arr.join('-'));

// OJO, hay una lógcia de ir metiendo número por número (en forma de string), que stá muy bien