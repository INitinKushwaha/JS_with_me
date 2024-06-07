// const coding = ['js', 'py', 'cpp', 'rb']

// const values = coding.forEach((item)=>{
//  console.log(item)
//     return item
// })

// console.log(values)

const myNums = [1, 2, 3, 4, 5,6,7,8,9,10]

const newnums = myNums.filter((num)=>{
    return num > 5
})
// console.log(newnums);

const books = [
    {
        title : 'The Alchemist', genre: 'Adventure', public: 1988,
        editions : 2004
    },
    {
        title : 'The Da Vinci Code', genre: 'Mystery', public: 2003,
        editions : 2006
    },
    {
        title : 'The Hobbit', genre: 'Fantasy', public: 1937,
        editions : 2001
    },
    {
        title : 'The Catcher in the Rye', genre: 'Fiction', public: 1951,
        editions : 2000
    },
    {
        title : 'The Great Gatsby', genre: 'Fiction', public: 1925,
        editions : 2000
    }
]

// const userbooks = books.filter((bk)=>{
//     return bk.genre === 'Fiction'
// })

const userbooks = books.filter((bk)=>{
 return bk.public > 2000 && bk.genre === 'Fiction'
})

console.log(userbooks)