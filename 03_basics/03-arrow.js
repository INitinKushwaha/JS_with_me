const user ={
    username :"nitin",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "gigglernitin"
// user.welcomeMessage();

// console.log(this);


// function chai(){
//     let usrname = "nitin"
//     console.log(this.usrname); // output is undefiend becuasse this is only use in onjects
// }
// const chai = () =>{
//     let username = "nitin"
//     console.log(this.username); 
// }
// chai()


// const addtwp = (num1, num2) =>{
//     return num1 + num2
// }


// const addtwp = (num1, num2) => num1 + num2

// const addtwp = (num1, num2) => (num1 + num2)

const addtwp = (num1, num2) => ({username : "nitin"})  // return the obkect in the arrow function

console.log(addtwp(1,2));






