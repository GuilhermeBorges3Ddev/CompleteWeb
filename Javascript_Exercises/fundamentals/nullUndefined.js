/* A simple example with 'undefined' value versus another value witch is not defined */
let valor //NOT initialized
console.log(valor)
//console.log(valor2) --> Not defined
console.log('-----------------------------')

valor = null //Without value, but has an address in memory
console.log(valor)
console.log('-----------------------------')

/* Variable of 'produto.preco' is undefined, but exists */
const produto = {}
console.log(produto.preco)
console.log(produto)
console.log('-----------------------------')

/* Giving a undefined value to 'preco' and testing the return */
produto.preco = 3.50
console.log(produto)
produto.preco = undefined //Wrong practique, but it's valid
console.log(!!produto.preco)
//delete produto.preco --> Removing the atribute 'preco' of object produto
//produto.preco = null --> Attribute exists and it's defined but don't has any value
console.log(produto) 
console.log('-----------------------------')

/* Writing on the screen the object 'produto' after all the modifications */
console.log(produto)