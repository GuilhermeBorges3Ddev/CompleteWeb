// 'Object' type is a function, but a 'new Object()' has the 'object' type
console.log(typeof Object)
console.log(typeof new Object)
console.log('----------------------')

// Client has the 'function' type and 'new Client' has the 'object' type too
const Client = function () {}
console.log(typeof Client)
console.log(typeof new Client)
console.log('----------------------')

//ES 2015 (ES6) -->
class Product {}
console.log(typeof Product)
console.log(typeof new Product)
console.log('----------------------')
