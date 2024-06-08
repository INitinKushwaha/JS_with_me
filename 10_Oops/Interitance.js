class User{
    constructor(username){
        this.username = username;

    }

    logme(){
        console.log(`UserName is ${this.username}`)
    }

    
}

class Teacher extends User{
    constructor(username,email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(course){
        this.course = course;
        console.log(`${this.username} is teaching ${this.course}`)
    }

    
}

const chai = new Teacher("chai", "chai@fb.com","123")

chai.addCourse("JS")

const tea = new User("tea")
tea.logme()

chai.logme()

console.log(chai == tea)
console.log(tea == chai)
console.log(chai instanceof Teacher)
console.log(chai instanceof User) 

