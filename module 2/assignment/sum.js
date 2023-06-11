// summation using for loop

var x = [10, 20, 30];
var sum = 0;

for (let idx = 0; idx < x.length; idx++) {
    let currentValue = x[idx];
    sum += currentValue;
}

console.log(`The sum is ${sum}`);
