/* FLOAT and INTEGER are of type Number  */
const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)

// Both of variables are INT
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

/* Using toFixed() and toString(), who are methods of Number */
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))//Convert first in String and after in binary
console.log(typeof media)
console.log(typeof Number)//type function