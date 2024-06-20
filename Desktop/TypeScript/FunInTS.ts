function x() {
  x;
  console.log("ather");
}

function x2() {
  let x1 = 0;
  console.log("ather");
}
x();
x2();

//fun in ts

//named function with number as parameters type and return type
function add(a: number, b: number): number {
  return a + b;
}

//anonymous function with number as parameters type and return type
let sum = function (a: number, y: number): number {
  return a + y;
};
