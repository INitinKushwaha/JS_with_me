const name = "nitin";
const repocount = 50;

// console.log(name + repocount);

console.log(`hello my name is ${name} 
and my repo count is ${repocount }`);

let gameName = new String("Gigglernitin");
console.log(gameName);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());

console.log(gameName.charAt(1));

console.log(gameName.indexOf("T"));

const newString = gameName.substring(0,6 );
console.log(newString);

const anotherString = gameName.slice(-5,4);
console.log(anotherString);

const newStringOne = "    nitin      ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.%20google.com";

console.log(url.replace('%20', '-'));

const hello = "nitin-kushwaha-giggler-nitin-who-nitin";

console.log(hello.split('-'));