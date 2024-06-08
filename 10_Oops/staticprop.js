class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`UserName is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const nitin = new User("nitin")
// console.log(nitin.createId()) // error
console.log(User.createId()) // 123

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@iphone.com")
console.log(iphone)
console.log(iphone.logme())
// console.log(iphone.createId()) // Error