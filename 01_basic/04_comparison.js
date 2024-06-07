console.log("2" > 1); 
console.log("02">1);    

console.log(null >= 0);  
console.log(null > 0);  
console.log(null == 0);  
console.log(null < 0);  

console.log(undefined == 0); 

// ====  datatype also chcked in comparison

console.log("2" === 2);
console.log(2 ===2);


/*
Primitive datatype

7 type : String , Number , Boolean , null , undefiend, symbol, Bigint   // 7th is new in ES6

Non Primitive datatype
types : Object, Array, Function
*/

let obj = {
    name: "John",
    age: 30,
}

const myFunction = function(){
    console.log("Hello");
}

myFunction();

// ********************** 

// Stack(primitive)  and Heap(Non perimitive) Memory

/*
stack memory give the copy of the value
*/

let myyoutubename = "Gigglernitin";
let anothername = myyoutubename
anothername = "nitin aur code";
console.log(anothername);
console.log(myyoutubename);

let userOne ={
    email :"user@google.com",
    upid :123456789,
}
console.log(userOne.email);
let userTwo = userOne;

userTwo.email ="gigglernitin@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);