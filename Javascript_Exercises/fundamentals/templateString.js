//Doing the 'Concat()' operation without template string
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
console.log('-----------------------------')

//Concatenation with template string
const template = `Olá ${nome}!`
console.log(template)
console.log('-----------------------------')

//We'll see the same result, but done in different ways
console.log(concatenacao + ' ----> ' + template)
console.log('-----------------------------')

//Expressions...
console.log(`1 + 1 = ${1 + 1}`)
console.log('-----------------------------')

//Combining arrow functions with Strings
const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
console.log('-----------------------------')
