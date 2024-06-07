// var c = 300

let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 10
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "nitin"
    
    function two (){
        const website = "youtube"

        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true){
    const username = "nitin"
    if(username === "nitin"){
        const website = " youtube"
        // console.log(username  + website);  // coorect
    }
    // console.log(website);  // errror

}

// console.log(username)  ??eroor

// ************** interesting ***************

console.log(addone(5))  // coorect
function addone (num){
    return num +1
}

// addone(5) // correct 

// addtwo(5)  error of hoisting
const addtwo = function(num){
    return num +2
}
addtwo(5)
