/*

8. Write a JavaScript program to create a clock.
Note: The output will come every second.
  Expected Console Output :
  "14:37:42"
  "14:37:43"
  "14:37:44"
  "14:37:45"
  "14:37:46"
  "14:37:47"

*/

const clock = () => {
    setInterval(() => {
    let time = new Date(); 

    console.log( (time.toLocaleString()).split(",")[1].trim()); // 10/31/2023, 8:28:14 AM formato de la string
  }, 1000);
}
clock()


