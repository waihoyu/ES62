

let fs = require("fs")
function read(number,callback) {
    fs.readFile("./data/"+number+".txt",function (err,data) {
        if (err){
            callback(-1)
            return
        }
        var dataarr = JSON.parse(data)
        callback(dataarr)
    })
}

function write(number,arr,callback) {
    let data = JSON.stringify(arr)
    let result = fs.writeFile("./data/"+number+".txt",data,callback)

}

exports.read = read
exports.write = write

// write(99,[1,2,3],function (err) {
//     console.log(err);
// })
