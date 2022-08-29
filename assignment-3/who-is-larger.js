const number1 = Math.floor(Math.random() * (100 - 1) - 1);
const number2 = Math.floor(Math.random() * (100 - 1) - 1);

const isLarger = number1 > number2 ? number1 : number2;

console.log(`Number 1 = ${number1}`);
console.log(`Number 2 = ${number2}`);
console.log(`The largest number is ${isLarger}`);