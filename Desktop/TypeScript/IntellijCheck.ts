let array: number[] = [1, 2, 3];

let result2: number = array.map((n) => n + 1).reduce((x, a) => x + a, 1);

console.log(result2);
