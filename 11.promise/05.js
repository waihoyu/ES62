


const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('success')
        console.log('promise1')
    }, 1000)
})


const promise2 = promise1.then(()=>{
    throw new Error("err")
})


console.log(promise1)
