
var a = {x:100,y:200}
var b = {}

Object.assign(b, a)
console.log(b);


console.log('------------------')
var demo0 = Object.create(null)
var demo1 = Object.create({x:100})
var demo2 = {}
var demo3 = new Object()

var demo4 = Object.assign(demo1)
console.log(demo0)
console.log(demo2.hasOwnProperty())
console.log(demo2.toString())
console.log(demo3)
console.log(demo4)

function fn(){
    console.log('fn')
}

console.log(fn.prototype)
