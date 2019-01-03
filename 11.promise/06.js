const  p = Promise.resolve()
    .then(() => {
        // return new Error('error!!!')
        // return Promise.resolve(new Error('error!!!'))
        return Promise.reject(new Error('error!!!'))
    })

    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
console.log(p);
