

var mongoose = require('mongoose')

var courseSchma = new mongoose.Schema({
    "cid": Number,
    "name": String,
    "students": [Number]
})

courseSchma.statics.findCourseByid = function (cid,callback) {
    this.find({"cid": cid},function (err,results) {
        callback(results)
    })
}

courseSchma.methods.del = function (sid) {
    var index = this.students.findIndex(function (item) {
        return item == sid
    })
}

//创建类
var Course = mongoose.model("Course",courseSchma)
module.exports = Course
