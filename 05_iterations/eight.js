const array1 = [1,2,3,4]

const initialValue = 0

const sumwithinitialvalue = array1.reduce((acc, curr)=>(acc+curr), initialValue)
console.log(sumwithinitialvalue) // 10

const shoppingCart = [
    {
        itemname : 'js-course',
        price : 2999
    },
    {
        itemname : 'py-course',
        price : 1999
    },
    {
        itemname : 'java-course',
        price : 3999
    },
    {
        itemname : 'mobile-course',
        price : 5999
    },
    {
        itemname : 'cpp-course',
        price : 9999
    },
]

const total = shoppingCart.reduce((acc, curr)=>(acc+curr.price), 0)
console.log(total) 
