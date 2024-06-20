var empName = "Rohan";
var empDept = "IT";
// Before-ES6
// let output1: string =
//   employeeName + " works in the " + employeeDept + " department.";
// After-ES6
var output2 = "".concat(empName, " works in the ").concat(empDept, " department.");
//console.log(output1); //Rohan works in the IT department.
console.log(output2); //Rohan works in the IT department.
//Boolean data type
var identifier = false;
console.log(identifier);
//void data type
var unusable = undefined;
console.log(unusable);
