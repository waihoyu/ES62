var mongoose = require('mongoose')
var Course = require('./models/Course')
var Student = require('./models/Student')
var tool = require("./models/tool")

mongoose.connect('mongodb://localhost/xuanke2')

// var li = new Student({
//     "sid":100008,
//     "name":"李林黛",
//     "courses":[5]
// })
// li.save()
tool.xuanke2(100003,5,function (data) {
    console.log(data);
})
