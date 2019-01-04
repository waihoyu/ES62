function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve("data");
        // fetch('https://api.github.com/users/superman66')
        //     .then((data) => {
        //         resolve(data.json());
        //     }, (error) => {
        //         reject(error);
        //     })
    });
}

// var  temp =  fetchUser();
// temp.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// })




// async function getUserByAsync(){
//     let user = await fetchUser();
//     console.log(user);
//     console.log("test")
//     return user;
// }
//
//
// getUserByAsync()
//     .then(v => console.log(v));

function getUserByPromise() {
    fetchUser()
        .then((data) => {
            console.log(data);
        }, (error) => {
            console.log(error);
        })
    console.log("tst")
}
getUserByPromise();





// function getUserByPromise() {
//     fetchUser()
//         .then((data) => {
//             console.log(data);
//         }, (error) => {
//             console.log(error);
//         })
// }
//
// getUserByPromise();
