setTimeout(function () {
    console.log(1);
}, 0);

Promise.resolve(function () {
    console.log(2);
})

new Promise(function (resolve) {
    console.log(3);
});

console.log(4);
