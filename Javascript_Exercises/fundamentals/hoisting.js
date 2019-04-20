// VAR is hoisted up on the code, this a peculiarity
console.log('a = ',a)
var a = 2
console.log('a = ',a)
console.log('---------------------')

//The same think occurs into a function, we has hoisting again
function teste() {
    console.log('a = ',a)
    var a = 2
    console.log('a = ',a)
}
teste()
console.log('---------------------')

/*
    Using hoisting does not make any effect in LET  
    console.log('b = ',b)
    let b = 3
    console.log('b = ',b)
    console.log('---------------------')
*/