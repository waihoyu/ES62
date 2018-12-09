
class Fruit {
    constructor(name,color){
        this.name = name
        this.color = color
    }
      printColor(){
        console.log(this.color)
    }
}

class apple extends Fruit{
    constructor(name,color){
        super(name, color)
        console.log(this);
    }
      printColor(){
        super.printColor()
    }
}

let app = new apple("苹果","红色")

app.printColor()
