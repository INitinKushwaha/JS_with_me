const userEmail = "nitin@hello.ai"

if(userEmail){
    console.log("Email is present")
}else{
    console.log("Email is not present")
}
/*
falsy value

false , 0 -0, 0n, "", null, undefined, NaN

truthy value
rest all values are truthy
'0', ' ', [], {}, function(){} knows empty function

*/
const useremail = []
if(useremail.length === 0){
    console.log("Array is empty")
}

 const emptyObj ={}

 if(Object.keys(emptyObj).length === 0){
     console.log("Object is empty")
 }

//  Nullish Coalescing Operator (??) : null undefined

let val1 ;
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 20
console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 100 ? console.log("I will buy") : console.log("I will not buy")
