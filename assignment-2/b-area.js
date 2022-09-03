const a = 5;
const b = 6;
const c = 7;

const semiPerimeter = (a + b + c) / 2;

const area = (semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)) ** 0.5;

console.log(area);