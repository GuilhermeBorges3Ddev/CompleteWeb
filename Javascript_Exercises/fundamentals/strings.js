const escola = "Cod3r"

console.log(escola.charAt(4))//These print returns the char 'r'
console.log(escola.charAt(5))//These print gives to us a char out of the range, what returns ''
console.log(escola.charCodeAt(3))//These print returns a html-UNICODE value, not the real value passed
console.log(escola.indexOf('3'))//These print returns the value of the index passed in the String

/* The difference between substring() with one and two args */
console.log(escola.substring(1))//The return here ignore the index '0'
console.log(escola.substring(0, 3))//The return here represents chars 0<3, one by one

/* Union operation with Strings */
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola' + escola + "!")

/* Change a letter to another  */
console.log(escola.replace(3, 'e'))

/* Converting a String in some Array */
console.log('Ana,Maria,Pedro'.split(','))