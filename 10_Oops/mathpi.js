const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);
// console.log(Math.PI);

const chai ={
    name : 'ginger chai',
    price : 100,
    isAvailable : true,
    showPrice : function() {
        console.log(this.price);
    }

}
// chai.name = 'masala chai';
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(key, value);
    }else{
        console.log("chai fat gayi"); 
        break
    
    }
    
}
Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false,
})
Object.defineProperty(chai, 'price', {
    writable : false,
    enumerable : false,
})
Object.defineProperty(chai, 'isAvailable', {
    writable : false,
    enumerable : false,
})

chai.name = 'masala chai';
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key,value] of Object.entries(chai)) {
    console.log(key, value);
    
}