const a = 5;
const b = 6;
const c = 7;

const semiPerimeter = (a + b + c) / 2;

let area = (semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)) ** 0.5;
area = area.toFixed(2);

console.log(`The value of the area of the triangle is ${area}`);