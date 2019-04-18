//One more time 'var' doesn't respect the scope, and act as global accessing into a 'for'
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('------------------')
console.log('i = ',i)