// for of loop

// ["","",""] // array with string
// [{},{},{}] // array with objects

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(`value of num is ${num}`);
}

const greeting = "hello world"

for (const greet of greeting) {
    // console.log(`value of greet is ${greet}`);
}

// Maps

const map = new Map();
map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

// console.log(map);

for (const [key , value] of map) {
    // console.log(`key is ${key} and value is ${value}`);
}

const myobj ={
    'game1': 'cricket',
    'game2': 'football',
}

for (const [key , value] of myobj) {
    // console.log(`key is ${key} and value is ${value}`);
// object is not iterable
}



