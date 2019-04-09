//Obtain a function using vars/consts
const printSum = function (a, b) {
    console.log(a + b)
}
printSum(2, 4)
console.log('-------------------------------')

//Saving in vars/consts an arrow function
const Sum = (a, b) => {
    return a + b
}
console.log(Sum(2, 2))
console.log('-------------------------------')

//Implicit return
const Minus = (a, b) => a - b
console.log(Minus(2, 3))
console.log('-------------------------------')

//Arrow function with a single parameter don't need the synthax (x, y) => x * y for example! 
const printTwo = a => console.log(a)
printTwo('Okay, I learned!')
console.log('-------------------------------')

