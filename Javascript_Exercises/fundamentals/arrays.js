/* Simple way to declare an array */
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//Out of array returns 'undefined' in JS
console.log('-----------------------------')

/* Array has a dinamically insertion */
valores[4] = 10
console.log(valores)
console.log(valores.length)
console.log('-----------------------------')

/* Add some values in the end of these array 'valores' */
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log('-----------------------------')

/* Two different ways to delete an element */
console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log('-----------------------------')

/* All arrays are objects  */
console.log(typeof valores)
console.log('-----------------------------')