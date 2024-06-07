const myobj ={
    js : 'javascript',
    py : 'python',
    cpp : 'c++',
    rb : 'ruby'
}

// forin loop

for (const key in myobj) {
     console.log(`key is ${key} and value is ${myobj[key]}`);
    }

const programming = ['javascript', 'python', 'c++', 'ruby']

for (const i in programming) {
    console.log(`${programming[i]}`);
}

const map = new Map();
map.set('In', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

for (const key in map) {
    console.log(`key is ${key} and value is ${map[key]}`);
// map is not iterable
}



