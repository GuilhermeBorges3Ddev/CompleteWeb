//Using 'dot' and accessing the type of 'console' we can see that he's an object
console.log(typeof console)
console.log('-------------------------------')

//'Math' is an object too
console.log(Math.ceil(6.1))//He elevates the number to '7'
console.log(Math.floor(6.1))//He downgrades the number to '6'
console.log(typeof Math)
console.log('-------------------------------')

//Classic access into an object using 'dot' as usual
const obj1 = {}
obj1.name = 'Ball'
console.log(obj1.name)
console.log('-------------------------------')

//U're seeing a function working as a class, normal in 'OO' languages
function obj(name){
    this.name = name //Creating a public attribute
    this.exec = function () {
        console.log('I am running')
    }
}
const obj2 = new obj('chair')
const obj3 = new obj('table')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
console.log('-------------------------------')
