

function Animal() {
    this.eat = function () {
        console.log('Animal eat');
    }
}

function Dog() {
    this.bark = function () {
        console.log('Dog bark');
    }
}

Dog.prototype = new  Animal()

var hashiqi = new Dog()

hashiqi.bark()
hashiqi.eat()
