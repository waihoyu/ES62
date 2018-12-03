

class S {
    constructor(x){
        this.x = x
    }
    getX(){
        console.log(this.x);
    }
    static getY(){
        console.log(this);
        console.log(this.y);
    }
}


class B extends S {
    constructor(){
        // this.y = 9
        super()
        // 执行完成之后才会有this
        // 必须写super,子类没有this this继承父类 super

    }
    getX(){
        //super  指向父类A的原型
        super.getX()
    }

    //static  父类的静态、私有方法也可以继承
    static getY(){
        //3.super 指向父类本身
        super.getY()
    }
}




