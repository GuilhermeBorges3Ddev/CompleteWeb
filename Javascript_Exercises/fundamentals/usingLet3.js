const funcs = []

//Adding function in array 'funcs[]' by 'lets' in a loop
for(let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//Here we can see that 'let' respect the scope of function, and remember the passed values 
funcs[2]()
funcs[6]()
funcs[8]()