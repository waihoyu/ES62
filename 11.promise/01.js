const promise = new Promise((resolve, reject) => {
    console.log(1)

    console.log(2)
})
const  promise2 = promise.then(() => {
    console.log(3)
    reject()

}).catch(()=>{
    console.log(5)
})

const  promise3 = promise2.then(() => {
    console.log(4)
    throw new Error('')
}).catch(()=>{
    console.log(6)
})

console.log(promise2,promise3)
