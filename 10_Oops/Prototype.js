let chai = "chai    "

// console.log(chai.truelength())


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "Thunder",
    spiderman: "Web",

    getSpidermanPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`)
    }
}
Object.prototype.nitin = function(){
    console.log("Nitin is present in all objects")
}

Array.prototype.heyNitin = function(){
    console.log("nitin says hello")
}

// heroPower.nitin()

myHeros.nitin()
myHeros.heyNitin()
// heroPower.heyNitin()


// ********* Inheritance *********
const User = {
    name : 'nitin',
    email :'nitin@google.com'
}

const teacher ={
    makeVideo : true
}
const teachingSuport = {
    isAvailable : false,
    __proto__ : teacher
}
const TASupport = {
    makeAssignment : 'Js Assignment',
    fulltime : true,
    __proto__ : teachingSuport
}
// teacher.__proto__ = User
console.log(TASupport.makeVideo)
// console.log(TASupport.name)

// modern syntex

Object.setPrototypeOf(teacher,User)
console.log(TASupport.name)


let anotherUsername = "nitinaurcode     "

String.prototype.truelength = function(){
    // console.log(`${this}`)  // nitinaurcode
    //  console.log(`${this.name}`) // undefined
     console.log(`True length is : ${this.trim().length}`)

}
anotherUsername.truelength()
chai.truelength()
"nitin".truelength()


