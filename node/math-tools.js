

function sum() {
    let result = 0
    for (let i = 0 ; i < arguments.length;i++)
    {
         result = result + arguments[i]
    }
    return result
}


function average() {
    let result = 0
    result = sum.call(null,...[12,12])
    // console.log(result)
}

function log(){
    var args = Array.prototype.slice.call(arguments);
   let test = args.unshift()

    args.unshift('(app)');
    console.log(args)
    console.log.apply(console, args);
};


exports.sum = sum
exports.average = average
exports.log = log
