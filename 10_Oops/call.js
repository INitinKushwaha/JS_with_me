function setUser(username){
    this.username = username;
}

function createUser(username, email, password){
//   setUser(username); // this will not work
    setUser.call(this,username); // this will work
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@google.com","abc1230")

console.log(chai);