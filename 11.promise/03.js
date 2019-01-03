

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('success')
        console.log("1");
    }, 1000)
    // resolve((()=>{console.log("1")})())
})

// const  promise2 = promise1.then(()=>{console.log("1");},()=>{console.log("2");}).catch((err)=>{console.log(err)})

console.log(promise1)

// console.log(promise2)
