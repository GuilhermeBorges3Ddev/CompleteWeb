//A 'Let' into the loop cannot be accesible out of the scope
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('------------------')
/* 
    console.log('i = ',i) --> Expected error: 'i' is not declared!!!
*/