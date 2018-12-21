

let fs  = require('fs')

fs.readFile("./01.txt",function (err,data) {

    console.log(data.toString());
})
