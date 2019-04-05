/* Returning two trues in different ways */
let isActive = false
console.log(isActive)
isAdtive = true
console.log(isActive)

/* Double negative is the same of True  */
isActive = 1
console.log(!isActive)
console.log(!!isActive)

/* Numbers, Strings, Arrays, Objects, Infinity and atribuitions are TRUE */
console.log('Thinks that returns true...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

/* '0', empty strings, null, NaN and undefined are FALSE */
console.log('Thinks that returns false...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

/* Logical sentence what return TRUE ngativated two times is true */
console.log('if one value is true into a multiple "OR" the sentence is True')
console.log(!!('' || null || 0 || 'opa' || 123))

/* If a string is empty we return the right side of equal */
let name = 'Guilherme'
console.log(name || 'Without name')



