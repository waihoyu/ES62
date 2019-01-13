function  Person() {
    // console.log(this)
    this.name = 'abc'
}

Person.prototype.print = function () {
    console.log(this)
}


var person = new Person()


person.print()
