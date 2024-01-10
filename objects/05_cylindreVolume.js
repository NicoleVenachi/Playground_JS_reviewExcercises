/*

5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.

*/


// --- con clases
// class Cylinder {
//   constructor(radious, height) {
//     this.radious = radious;
//     this.height = height;
//   }

//   get volume() {
//     return (2*Math.PI*this.radious*this.height).toFixed(4)
//   }

// }

// const newCylinder = new Cylinder(3,2)
// console.log(newCylinder.volume);
// console.log(newCylinder);

// -- con objetos

const volume = (r,h) => 2*Math.PI*r*h;

const cylinder = {
  radious: 3,
  height: 2,
  volume: function () {
    return  (2*Math.PI*this.radious*this.height).toFixed(4)
  }
}


console.log(cylinder.volume());

// --- con instancias de funciones

// function Cylinder(cyl_height, cyl_diameter) {
//   this.cyl_height = cyl_height;
//   this.cyl_diameter = cyl_diameter;
// }

// Cylinder.prototype.Volume = function () {
//   var radius = this.cyl_diameter / 2;
//   return this.cyl_height * Math.PI * radius * radius;
// };

// var cyl = new Cylinder(3, 2);
// // Volume of the cylinder with four decimal places.
// console.log('volume =', cyl.Volume().toFixed(4));

