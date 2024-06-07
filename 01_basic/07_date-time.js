// Date

let mydate = new Date();
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());   

let myCreatedDate = new Date(2001,0,21);
console.log(myCreatedDate.toDateString());

let mytimeStamp = Date.now();

console.log(mytimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`); 


