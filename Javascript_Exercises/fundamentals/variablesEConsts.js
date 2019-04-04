/* VAR and LET are used to declare variables  */
var a = 3
let b  = 4//Prefer these form to declare variables

var a = 30// or 'a = 30', stay on, var's can be redeclared in these way 
b  = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
//c = 50 --> You can't redefine constants!!
console.log(c)