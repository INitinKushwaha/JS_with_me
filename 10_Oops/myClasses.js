// ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    // Method
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@x.com","123")

console.log(chai.encryptPassword())
console.log(chai.changeUserName())

// behind the scenes

function Users(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Users.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const nitin = new Users("nitin", "nitin@fb.com","123")   
console.log(nitin.encryptPassword())
console.log(nitin.changeUserName())