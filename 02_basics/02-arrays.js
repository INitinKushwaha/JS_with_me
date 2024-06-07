const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["batman","superman","flash"]

marvel_heros.push(...dc_heros);
console.log(marvel_heros);

marvel_heros.concat(dc_heros);
console.log(marvel_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("nitin"));
console.log(Array.from("nitin"));

let score = 100
let score2 =200
let score3 = 300

console.log(Array.of(score,score2,score3));