function User(email,password){
    this.email = email;
    this.password = password;

    Object.defineProperty(this, "email", {
        get : function(){
            return this._email
        },
        set : function(value){
            this._email = value;
        }
    });
    Object.defineProperty(this, "password", {
        get : function(){
            return this._password;
        },
        set : function(password){
            this._password = password;
        }
    });

}

const nitin = new User("nitin@google.com", "12345");
console.log(nitin.email);