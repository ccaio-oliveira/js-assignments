const a = 5;
const b = 6;
const c = 7;

const semiPerimeter = (a + b + c) / 2;

let area_triangle = (semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)) ** 0.5;
area_triangle = area_triangle.toFixed(2);

console.log('---------------');
console.log(`The value of the area of the triangle is ${area_triangle}`);