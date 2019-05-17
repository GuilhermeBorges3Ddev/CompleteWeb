/* 
    Destructuring used in an object to push-out some data...
*/

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// {} is a representation of destructuring operation to Objects
const { nome, idade } = pessoa
console.log(nome, idade)
console.log('----------------------------------------')

//A second form to use destructuring is replacing the extractors changing his names
const { nome: a, idade: i} = pessoa
console.log(a, i)
console.log('----------------------------------------')

//Extracting by destructuring again two variables who doesn't exists 
const { sobrenome, estadoDeHumor = 'learning'} = pessoa
console.log(sobrenome, estadoDeHumor)
console.log('----------------------------------------')

//Extracting again by destructuring, but now i'll extract a object wrapped into another object
const { endereco: {logradouro, numero, cep = 'undeclared!!' } } = pessoa
console.log(logradouro, numero, cep)
console.log('----------------------------------------')

/*
    You cannot extract an key what breaks the /path to the data with an null value, like this:
    const { conta: { ag, num }} = pessoa
    OBS: If 'conta' exists but 'ag' or 'num' don't, you will have a valid destructuring!!!!
*/

