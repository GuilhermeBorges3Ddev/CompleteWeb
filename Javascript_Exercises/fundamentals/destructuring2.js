/* 
    Destructuring used in an array with just one element...
    After we'll see a little bit more extractions to add some complexity.
*/

const [a] = [10]
console.log(a)
console.log('----------------------------------')

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
console.log('----------------------------------')

//Arrays of arrays destructuring another array of arrays
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
console.log('----------------------------------')