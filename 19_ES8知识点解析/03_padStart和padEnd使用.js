const message = "Hello World"

const t = message.padStart(15,"*").padEnd(20,"-")

console.log(t);
const cardNumber = "43312719930611801X"
console.log(cardNumber.length)

const lastNumber = cardNumber.slice(-4)
const firstNumber =cardNumber.slice(0,4)
const resultNumber = firstNumber.padEnd(cardNumber.length/2, "*") + lastNumber.padStart(cardNumber.length/2, '*') 
console.log(firstNumber)
console.log(lastNumber)
console.log(resultNumber)