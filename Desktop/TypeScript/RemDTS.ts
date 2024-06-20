let val: any = "Hi";
val = 555;
val = true;

//function with any data type

function ProcessData(x: any, y: any) {
  return x + y;
}
let result: any;
result = ProcessData("Hello ", "Any!"); //Hello Any!
result = ProcessData(2, 3); //5

//Array data type

var list: number[] = [1, 2, 3];
var list: Array<number> = [1, 3, 5];

//Tuple data type
// Declare a tuple
let a: [string, number];

// Initialize it
a = ["hi", 8]; // OK

console.log(a);

//Interface
interface Calc {
  subtract(first: number, second: number): any;
}

let Calculator: Calc = {
  subtract(first: number, second: number) {
    return first - second;
  },
};
