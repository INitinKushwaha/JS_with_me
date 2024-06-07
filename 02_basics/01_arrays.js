// arrays

const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true, "nitin"];
console.log(myarray);

console.log(myarray[11]);

// array method

let myarr = new Array(1,2,3,4);
myarr.push(8);
myarr.pop();

myarr.unshift(9);
myarr.shift();

console.log(myarr.includes(3));
console.log(myarr.indexOf(19));

const newArr = myarr.join();

console.log(myarr);
console.log(typeof newArr);


// slice , splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3);
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3);

console.log(myn2);
console.log("C ", myarr);