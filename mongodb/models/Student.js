
var mongoose = require('mongoose')

var studentSchma = new mongoose.Schema({
    "sid":Number,
    "name":String,
    "courses": [Number]
})
studentSchma.statics.findCourseByid = function (sid,callback) {
    this.find({"sid": sid}, function (err, results) {
        callback(results)
    })
}
//创建类
var Student = mongoose.model("Student",studentSchma)
module.exports = Student
