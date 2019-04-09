//Function without return
function printSum(a, b) {
    console.log(a + b)
}
printSum(2, 3)
printSum(2)//2 + undefined = NaN
printSum(2, 3, 4, 5, 6 ,7)//only the firstly two numbers are returned
printSum()//undefined + undefined = NaN
console.log('-------------------------------')

//Function what returns something
function Sum(a, b=0){
    return a + b
}
console.log(Sum(2, 3))
console.log(Sum(2))//2 + 0, because we get the 'b' var not passed and puts 0 automatically
console.log(Sum())// NaN + 0 = NaN
console.log('-------------------------------')
