const promise1 = new Promise((resolve,reject)=>{
    resolve("success")
})

const promise2 = promise1.then(()=>{
    console.log("promise")
})


console.log('promise1', promise1)
console.log('promise2', promise2)
