
var Course = require("./Course")
var Student = require("./Student")

exports.xuanke2 = function (sid,cid,callback) {
    Course.findCourseByid(cid, function (results) {
        var course = results[0]
        if (course.students.includes(sid)) {
            callback(-4)
            return
        }
        course.students.push(sid)
        course.save(function () {
            Student.findCourseByid(sid, function (results) {
                var student = results[0]
                student.courses.push(cid)
                student.save()
            })
        })
    })
}


// console.log.prototype


