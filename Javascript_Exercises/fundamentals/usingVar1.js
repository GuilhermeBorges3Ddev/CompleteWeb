{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera) 
            }
        }
    }
}
//Var's in objects, blocks of code or whetever place has a global behavior 
console.log(sera)
console.log('----------------------')

//Var's in function has a local behavior, cannot be subscribed 
function teste() {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) ---> It'll return a not declared variable
