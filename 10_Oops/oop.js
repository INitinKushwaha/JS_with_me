const user = {
    username : 'Nitin',
    loginCount : 1,
    signedIn : true,
    getUserDetail: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetail());
// console.log(this); // window object

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // this is not required in constructor function
}

const userone = new User('Nitin', 1, true);
console.log(userone.constructor);  // refrerence to the constructor function
const usertwo = new User('Rahul', 1, true);
// console.log(usertwo);
