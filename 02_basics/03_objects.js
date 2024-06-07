// singleton objects

// object literals
const mySym = Symbol("key1")
console.log(typeof mySym)
const JsUser ={
    name : "nitin",
    "full name" : "nitin Kushwaha",
    [mySym] : "key1",
    age:18,
    location:"Kanpur",
    email: "nitin@google.com",
    isLoggedIn : false,
    lastLoginDays:["monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "nitin@yahoo.com"
// Object.freeze(JsUser)
JsUser.email ="123@google.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello, I am Nitin Kushwaha")
}

JsUser.greeting2 = function(){
    console.log(`Hello, I am  ${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greeting2())