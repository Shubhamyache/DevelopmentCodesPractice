function greet(m1, m2) {
    return this.name + ' ' + m1 + ' ' + m2;
}

let obj = { name: 'ganesh' };

const result = greet.apply(obj, ["is god!", "so we worship him"]);

console.log(result);

