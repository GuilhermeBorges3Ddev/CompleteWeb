/* Adding attributes inside the object by key and the respective value */
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40//Its not the perfect form to declare a pair key/value
console.log(prod1)
console.log('-----------------------------')

/* Using and declaring an object in the 'open-format' */
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        categoria: 'Vestuario',
        obj:{
            subcategoria: 'Camisas Masculinas'
        }
    }
}
console.log(prod2)
console.log('-----------------------------')

