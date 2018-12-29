
var mongoose = require('mongoose')

var courseSchma = new mongoose.Schema({
    "cid": Number,
    "name": String,
    "students": [Number]
})

courseSchma.statics.findCourseByid = function (cid,callback) {
    this.find({"cid": cid},function (err,results) {
        console.log(cid);
        callback(results)
    })
}
//创建类
var Course = mongoose.model("Course",courseSchma)
module.exports = Course
