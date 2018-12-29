
var Course = require("./Course")
var Student = require("./Student")

exports.xuanke2 = function (sid,cid) {
    Course.findCourseByid(cid, function (results) {
        var course = results[0]
        course.students.push(sid)
        course.save()
    })
    Student.findCourseByid(sid, function (results) {
        var student = results[0]
        student.courses.push(cid)
        student.save()
    })
}
