const number = Math.floor(Math.random() * (100 - 1) - 1);
const evenOrOdd = number % 2 === 0 ? 'even' : 'odd';

console.log(`${number} is ${evenOrOdd}`);