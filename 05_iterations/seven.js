const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newnums = mynums.map((num) => {
//     return num * 2;
// });

// chaining map 
// const newnums = mynums.map((num) => {
//     return num * 10;
// }).map((num) => {
//     return num + 1;
// });
// chaining map and filter
const newnums = mynums.map((num) => {
    return num * 10;
}).map((num)=>num + 1)
.filter((num) => {
    return num > 50;
});
console.log(newnums);
