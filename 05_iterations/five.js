const coding = ['js', 'py', 'cpp', 'rb']

// foreach loop

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

coding.forEach((item, index , arr)=>{
//  console.log(item, index, arr);

})

const mycoding = [
    {
        js: 'javascript',
        py: 'python',
        cpp: 'c++',
        rb: 'ruby'
    },
    {
        In: 'India',
        USA: 'United States of America',
        Fr: 'France'
    },
    {
        cricket: 'game1',
        football: 'game2'
    }
]

mycoding.forEach((item)=>{
    console.log(item.Fr);
})
