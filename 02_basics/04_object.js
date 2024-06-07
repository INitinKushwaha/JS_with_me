// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nitin Kushwaha"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : " some@gmail.com",
    fullname : {
        userfullname: {
            firstName : "Nitin",
            lastName : "Kushwaha"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);


const obj1 = {
    1: "one",
    2: "two",
}
const obj2 = {
    3: "three",
    4: "four",
}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const users = [
    {
        name: "Nitin",
        age: 18,
        email: "h@gmail.com"
    },
    {
        name: "Aman",
        age: 18,
        email: "nm@gmail.com"
    },
    {
        name: "Rahul",
        age: 18,
        email: "rahul@gmail.com"
    }
]

console.log(users[1].name)


console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"));

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor : "Nitin-Kushwaha",
}

const {courseInstructor : teacher} = course
console.log(teacher) 




// {
//     "name" : "Nitin",
//     "coursename" : "js ",
//     "price" ; "free"
// }

// [
//     {
//         "name" : "Nitin",
//         "coursename" : "js ",
//         "price" ; "free"
//     }
// ]