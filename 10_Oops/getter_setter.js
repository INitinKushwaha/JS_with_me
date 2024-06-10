class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set password(password){
        this._password = password;
    }
        
    get password(){
        return this._password.toUpperCase();
    }
}

const nitin = new User("nitin@gmail.com", "12345");
console.log(nitin.password);