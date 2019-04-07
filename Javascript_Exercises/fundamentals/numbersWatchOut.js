//Infinity
console.log(7 / 0) 

//Natural convertion of String to Integer
console.log("10" / 2)

//Forcing a concat() operation
console.log("3" + 2)//Value '32' returned is a String, not a Number

//Here we see the opposite, a String converted in Number
console.log("3" - 2)

//NaN
console.log("Show!" * 2)

//Showing the error of precision in JS
console.log(0.1 + 0.7)

/* Cannot convert native type to String, put parenthesis for security  */
//console.log(10.toString())
console.log((10).toString())

// In parenthesis the function runs well
console.log((10.345).toFixed(2))