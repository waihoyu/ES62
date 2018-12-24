

function People(name,sex,age) {
    this.name = name
    this.sex = sex
    this.age = age
}

People.prototype.sayHello = function () {
    console.log("姓名: "+this.name + ":" + "性别: " + this.sex + "年龄： " + this.age )
}

exports.People = People
exports.People1 = People

// module.exports = People
