var name12: string = "John";
var score1: number = 50;
var score2: number = 42.5;
var sum2 = score1 + score2;
console.log("name" + name12);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum2);

//Type Assertion in TypeScript
var str3 = "1";
var str2: number = <number>(<any>str3); //str is now of type number
console.log(typeof str2);
