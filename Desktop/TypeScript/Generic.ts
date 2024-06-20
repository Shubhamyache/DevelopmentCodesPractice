//Generics in ts
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output23 = identity<number>(100);
