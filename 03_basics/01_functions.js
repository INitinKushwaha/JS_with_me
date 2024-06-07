function sayMyName(){
    console.log("My name is Slim Shady");
    console.log("My name is Slim Shady");
    console.log("My name is Slim Shady");
    console.log("My name is Slim Shady");
    console.log("My name is Slim Shady");
}

// sayMyName()

// function addtwoNumber (number1 , number2){
//     console.log(number1 + number2);
// }
function addtwoNumber (number1 , number2){
    let result = number1 + number2;
    return result;
}

const result = addtwoNumber(1,2);
// console.log(result);

function logginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please provide a username");
    //     return
    // }
    if(!username){
        console.log("Please provide a username");
        return
    }
    return `${username} is logged in`
}

// console.log(logginUserMessage("John"));
// console.log(logginUserMessage());


function calculatedCartPrice(val1 , val2, ...num1){
    return num1
}

// console.log(calculatedCartPrice(1,2,3,4,5,6,7,8,9,10));

const user ={
    name: "John",
    age: 25
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

// handleObject(user);
handleObject({
    name: "Jane",
    age: 30
})

const mynewArray = [100,200,500]

function handleArray(getArray){
    return getArray[1]
}

console.log(handleArray(mynewArray));

console.log(handleArray([100,200,500]))
