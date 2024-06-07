// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (i === 5) {
//         console.log("5 is best number");
//         break;
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`inner loop value : ${j} and inner loop ${i}`); 
//         console.log( i + '*' + j + '=' + (i*j));  
//     }
    
// }

let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);  
}

// breal and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is best number");
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is best number");
        continue;
    }
    console.log(`value of i is ${index}`);
    
}
