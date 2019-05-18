/*
    Using destructuring into parameters of functions...
    In these example i've been using arrays to pass and test these params 'max' and 'min' .
*/

function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Passing : max and min, only min, only max and in the last i passed nothing!!
console.log(rand([50, 40]))
console.log('----------------------------------')

console.log(rand([992]))
console.log('----------------------------------')

console.log(rand([ ,10]))
console.log('----------------------------------')

console.log(rand([]))
console.log('----------------------------------')