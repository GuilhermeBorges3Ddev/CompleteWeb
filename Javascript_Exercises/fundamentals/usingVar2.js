//The variable called 'numero' is changed inside another scope and this change is applyed globally
var numero = 1
{
    var numero = 2
    console.log('dentro = ',numero)
}
console.log('fora = ',numero)
