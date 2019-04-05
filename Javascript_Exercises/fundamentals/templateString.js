//Doing the 'Concat()' operation without template string
const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

//Concatenation with template string
const template = `Olá ${nome}!`

//We'll see the same result, but done in different ways
console.log(concatenacao + ' ----> ' + template)


//Expressions...
console.log(`1 + 1 = ${1 + 1}`)

//Combining arrow functions with Strings
const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
