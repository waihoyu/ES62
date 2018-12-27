var file = require("../models/file.js");
var math = require("../models/math.js");

exports.showIndex = function (request,response) {
    response.render("index")
}

//显示结果

exports.showResult = function (request,response) {

    let number = request.params.number
    if (number > 10000){
        response.send("太大了")
    }
    file.read(number, function (result) {
        if (result == -1){
            var result = math.calcfactor(number)
            file.write(number,result,function (err) {

            })
            console.log(result);
        }

        response.render("result",{
            "result":result,
            "number":number
        })
    })
}
