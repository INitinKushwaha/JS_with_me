const score = 400

const balance = new Number(1000)

console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(4));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));

// ***************** Maths *****************

console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.6));


console.log(Math.floor(Math.random()*10)+1);


const min =40
const max =100

console.log(Math.floor(Math.random() * (max-min +1) + min));