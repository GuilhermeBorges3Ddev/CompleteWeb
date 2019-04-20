const funcs = []

//Adding function in array 'funcs[]' by vars in a loop
for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//Both of function under this comment return '10', because 'vars' doesn't has the function scope
funcs[2]()
funcs[8]()