/**
 *
 *
 */

var file = require("../models/file.js");
var math = require("../models/math.js");

exports.showIndex = function (request,response) {
    response.render("index")
}

//显示结果

exports.showResult = function (request,response) {
    let number = request.params.number
    let  numberResult = []
    if (number > 10000){
        response.send("太大了")
    }
    file.read(number, function (result) {
        if (result == -1){
            numberResult = math.calcfactor(number)
            file.write(number,numberResult,function (err) {
                console.log(err);
            })
            console.log(numberResult);
        }
        // console.log(numberResult);
        numberResult = result
        response.render("result",{
            "numberResult":numberResult,
            "number":number
        })
    })
}
