// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log("DB is connected")
// }
(function chai(){
    console.log("DB is connected")
})();   // this is the IIFE function

((name)=> {
    console.log(`DB is connected  two ${name}`)
})("nitin");

