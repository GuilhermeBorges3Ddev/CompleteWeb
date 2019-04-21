/* Pair key and value applyed in a const  */
const saudation = 'Opa' //Lexical context "1"

// The return search for 'saudacao' into his context, if not, he up one context... and thenceforth!
function exec() {
    const saudation = 'Falaa' //Lexical context "2"
    return saudation
}

//Objects are nested pairs of key and values
const client = {
    name: 'Paulao',
    age: 102,
    weight: 55,
    address: {
        street: 'Very Old Street of Nowhere',
        number: 010
    }
}

//Testing the lexical context now:
console.log(saudation)
console.log(exec())
console.log(client)
console.log('----------------')
