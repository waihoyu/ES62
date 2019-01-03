
##  ES6 的重要基础知识

#### var和function

1、var function 存在变量提升

2、var 关键字只声明，不定义；

3、function 既声明又定义

4、用var 声明的变量还会挂到window下面。

#### let关键字

1、没有变量提升

2、不可以重复声明

3、不会给window上增加属性


### const 关键字
   
1、没有变量提升

2、不可以重复声明

3、不会给window上增加属性

4、const定义常量必须赋值 ,不可以重新赋值

### 块级作用域

1、 一个大括号就是一个块级作用域

2、 在块级作用中，var 和 function 声明的变量依然是全局的

3、 在块级作用下，let和const 声明的变量是私有的

4、 花括号如果想表示一个对象，不可以放在行首，不然会被认为是块级作用域。

5、 eval把字符串变成表达式: 

    eval('({name:"学习",age:10})')  

    eval('var o = {name:"学习",age:10}')
    
    console.log(eval('var o = {name:"学习",age:10}'));
    
    console.log(o);
    
6、if(){}中的function 只会提前声明不会定义，当条件成立，先给函数赋值，代码再执行。

    if(1){ //要注意这个是1还是0
      var S = 1;
      function getS(){}
    }
    
    console.log(S)
    console.log(getS)

7、for(){}

    let list = document.getElementById("list").getElementsByTagName("li")
    
    for(var i =0;i<list.length;i++){
        list[i].onclick = function () {
            alert(i)
        }
    }
    console.log(i)

//闭包

    let list = document.getElementById("list").getElementsByTagName("li")

    for(var i =0;i<list.length;i++){
        (function (i) {
            list[i].onclick = function () {
                alert(i)
            }
        })(i)

    }

### 解构赋值

数组的解构赋值

    let arr = [1,2,3,4]
    let x = arr[0]
    let y = arr[1]
    let m = arr[2]
    let n = arr[3]
    let [x,y,m,n] = arr

设置默认值的情况

    //设置默认值的情况
    let [x1,x2=(function () {
        console.log("哈哈");
        return 10
    }())] =[1]
    console.log(x1, x2);

省略赋值

    let [,,m2] = [1,2,3]
    console.log(m2)

不定参数赋值

    let [y1,y2,...y3]=[1,2,3,4,5]
    console.log(y3)

### 对象的解构赋值

如果变量名和属性名一样的，可以直接省略写法

    let {name,age} = {name:'waihoyu',age:10}
    let {name:name,age:age} = {name:'waihoyu',age:10}
    let {name:name,age=100} = {name:'waihoyu',age:undefined}
    let {name:name,age=100,list:[a1,a2,a3,a4]} = {name:'waihoyu',age:undefined,list:["js","node","vue","react"]}
    
    let x1,x2;
    [x1,x2] =[1,2]
    ({x1,x2}) =[1,2]


### 其他数据类型解构赋值

使用数组的解构赋值的形式，如果等号右边不是一个数组，默认将其转换为数组（类似数组的对象，必须有一个length属性）

    let [x,y]="123";
    console.log(x.y)

使用对象的解构赋值的形式，如果等号右边不是对象，默认转为对象

    let {a} = 1
    let {__proto__:a} = 1
    console.log(a)
    console.log(Object(1))  
    
    let {length:b}="1234"
    console.log(Object("1234"))
    console.log(b)

### 字符串的扩展

    console.log(String.prototype);
    1、 includes  返回值布尔  true  fasle
    判断字符串中有没有指定字符
    includes("指定字符",开始查找的位置)
    Number() 转成数字
    let str = "abcd";
    console.log(str.includes("a",undefined));
    
    2.startsWith  endsWith 判断字符串是不是以指定字符作为开头
    startsWith("指定字符",开始查找的位置（可选）)
    str.startsWith("a",3) 
    
    endsWith 判断指定字符是不是以指定字符作为结尾。
    endsWith("指定字符",num)
    num:从前num个中查看
    
    3.repeat  复制  重复多少次
    
    repeat(num) 将字符串重复num
    
    num 取整，不可以是负数或者Infinity
    
    负数报错  小数取整
    
    0到-1 之间 取整  0
    
    padStart  这是ES7中的，padEnd
    
    是用来补全我们的字符串的 按照指定字符补全字符串的指定长度
    
    参数 1. 长度  length  2.  指定字符
    
    padStart(Length,"指定字符")
    
    let str1 = "ab"
    
    str1.padStart(5,"g")
    
    str1.padEnd(7,"gbk")
    
### 字符串的模板
    
        //跟普通字符串一样使用，但是他可以添加变量
    
        let str = `哈哈`
    
    
### Array类上的扩展


    console.log(Array);
    // Array 类是一个函数，  返回一个数组
    // Array(x,y,z) 将参数变成一个数组返回
    // 注意：只有一个参数并且参数是个数字n,返回有n个空位的数组

    console.log(Array("1"))
    console.log(Array(7))

    // 跟Array一样的，唯一不同的是, 参数是一个数字的时候返回任意是一个项的数组
    Array.of()

    // 返回一个数组，（数组或类数组）
    Array.from()

### 数组原型上的扩展方法      
           
        console.log(Array.prototype)
        //copyWithin  从原数组中 读取 内容 替换数组的指定位置的内容
        // 参数 （替换的目标起始位置target,查找的起始位置begin, 查找的结束位置end,默认到末尾位置）
        //原数组的length不变，如果有超过部分会被截取掉
        let ary1 = [1,2,3,4,5,6,7,8]
    
        console.log(ary1.copyWithin(4, 2, 4));
    
        //fill 按照指定字符填充数组
        //将数组的没有一项都变成指定字符
        ary1.fill("test")
        //将数组的索引3,4 位置替换成“test”
        ary1.fill("test",3,5)
        //filter 变量数组  根据返回值去过滤原数组
    
        let ary3 = ["test",1,2,3,"珠峰"]
    
        ary3.filter(function (item,index) {
        //如果返回true就留下当前项，返回false 不留下当前项
            return typeof item === "number"
        })
    
        //find  先遍历数组 一旦参数函数返回true  停止查找  返回当前项
    
        let a = ary3.find(function (item) {
            return typeof item === "number"
        })
    
        //find findIndex
        // findIndex  先遍历数组， 一旦参数函数返回true,停止查找，返回当前项的索引
        // 只会查找一个
    
        //includes  判断数组中有没有某一项
        [1,2,3].includes(1)
    
        //every  某一个 遍历数组 如果每一项都返回true，最后结果为true，只要有一个为false 结果就是false
        [1,2,3,4,5].every(function (item) {
            return typeof  item === 'number'
        })
    
        //some  只有有一项是true ,最后结果就是true
    
        //reduce
        //     迭代
        let ary4 = [1,2,3,4,5]
        ary4.reduce(function (prev,item) {
            //prev  前一项的返回值  item  当前项
             return prev + item ;
    
        },10)
    
        //reduceRight  跟reduce 一样，只是顺序是从右边开始
    
        //keys  提供了遍历接口 每一项的一个接口  使用for of 遍历
    
        let ary5 = [1,2,3,4]
        for (let key of ary5.keys()) {
            // key 索引
            console.log(key);
        }
        // 默认使用 for of 遍历数组  默认遍历的就是每一项
    
        //enteries  遍历接口  可以遍历到索引和每一项
    
        for(let [index,item] of ary5.entries()){
            console.log(e)
            console.log();
        }
        //遍历数组的方法  参数是一个函数，这个函数中的this是window，我们可以通过第二个参数改变
     
### 数组的空位 

    
    //数组空位  数组的某个索引位置没有任何值  undefined 不是空位
    // 判断一个数组中某一个位置是不是空位  in
    //in 判断数组索引位置上有没有值
    let arr = [,,,]
    console.log(arr.length);
    //在ES5中数组方法对空位的处理不一致，一般直接跳过空位
    //在ES6中的方法将空位处理为undefined
    
    let arr1 = [1,2,,,,,3]
    arr1.filter(function (item){
        console.log(item)
    })
    
    for(let item of arr1){
        console.log(item)
    }

    for(let key in arr1){
        console.log(key)
    }
    
    //面试题



### 函数的扩展
    
       function fn() {
   
       }
   
       // /参数使用解构赋值
       function fn1({name,age}={name:"test",age:"100"}){
           console.log(name ,age)
       }
   
       //length 属性  形参的个数，如果形参有默认值，length就会失真，变成没有默认值
   
       function fn2(x,y) {
           x = x||"test"
           y = y|| "test"
       }
       function fn3() {
   
       }
       
       
        // 1.通过bind方法得到一个新的函数name 是“bound”原来函数的名字
    
        let fn1 = fn.bind(null)
        console.log(fn1.name);
        2.通过构造函数方式创建一个函数
        new Function()
        let fn2 = new Function("x,y","console.log(x,y);return x + y")
    
        console.log(fn2.name);
        let str = '[{"name":"test"},{"age":100}]'
        let arr = (new Function("return " + str))()
        console.log(arr); 
    
        //参数作用域问题
        //函数执行的时候先给形参赋值，形参也是私有变量，如果给形参的默认值是一个变量先看是不是自己的私有变量，不是自己的再找全局中是否有这个变量，没有就报错
        let m=10,n=100;
        function fn5(x=m, y=n) {
            //私有作用域，私有变量
            console.log(x)
            console.log(y)
            let m = "go"
            let n= "es6"
        }
    
        fn5()

### 扩展运算符

    // 扩展运算符
    // 1.将非数组变成数组
    // 2.将数组变成非数组
    let str = "123"
    console.log([...str])
    function fn() {
        console.log(arguments)
    }
    //2.将数组变成非数组
    let arr1 = [1,2,3,4]
    let arr2 =[10,20,30,40]
    console.log(arr1.concat(arr2));
    // arr1.concat()
    console.log([...arr1,...arr2])

    let ary3 = [12,3,4,56,6]
    console.log(Math.max.apply(null, ary3));
    console.log(eval("Math.max(" + ary3 + ")"))

    Math.max(...ary3)


### 匿名函数


    //箭头函数都是匿名函数
    let fn = (形参)=>{
        let fn = x=> x+1
    }
    // 箭头函数有几个特点，
    // 1.箭头函数没有this指向 里面的this 是上一级的作用域下的this，如果它的上一级还是箭头函数呢

    let obj = {
        fn: () => {
            let f = ()=>{
                console.log(this);
            }
            f()
        }
    }
    obj.fn()

    //2. 箭头函数没有arguments
    let f1 = ()=>{
        console.log(arguments);
    }
    f1();

    //3.箭头函数不可以用作构造函数 因为不可以使用new 执行



### 对象的扩展

对象简洁表达方式

    let name = "test" ,age = 100
    let school = {name ,age}

    let str = "name"
    let obj = {
        fn(){

        },
        //属性名都是字符串
        //属性名是字符串，属性名使用[] 里面可以写变量
        [str]:name,
        ["my"+str]:name
    }


    //Object()  将参数变成对象
    console.log(Object(1));
    console.log(Object(true));
    //Object.is 判断两个值是否相等
    // === NaN 跟NaN 不等  -0 === 0  true

    console.log(Object);
    // Object.assign()
    console.dir("d")
    console.log(Object.is(NaN, NaN));
    console.log(Object.is(-0, 0));
    // Object.assign()  合并对象
    //Object.assign(obj1,obj2) 将obj2合并到obj1上，返回obj1

    //ES7 中提供了对象的扩展运算符
    let school = {...obj1,...obj2}
    console.log(school);

    Object.getOwnPropertyDescriptor() //获取一个对象的描述
    //字符串的length不可以修改，字符串中的方法是不可以改变原字符的

    /**
     * configurable:false 是否可配置，可以删除这个属性
     * enumerable:false 是否可枚举
     * value:3
     * writable:false 是否可修改
     *
     */

    // Object.keys()  返回值  数组 [所有可枚举的属性]

    // Object.values()  返回值 数组  [所有可枚举的属性的键值]

    // Object.entries()  返回值  数组 [每一项也是一个数组[键，值]]
    
    
### 对象的set和get


    let obj = {
        _name :"aa",
        get name(){
            //只要通过 obj获取name属性 就会触发这个函数，而且这里通过return 返回值

            return _name
        },
        set name(val){
            //只要通过obj 给 name 属性设置值就会触发这个set函数
            this._name = val
        }
    }

    console.log(obj.name);
   
### Symbol的用法

    //Symbol 是一个新的数据类型，而且是一个基本数据类型，是一个值类型
    //使用Symbol函数执行得到一个Symbol数据类型
    // symbol 跟字符串差不多，但是使用symbol 得到一个数据是完全不同的
    // 每一个都是完全不同的，symbol可以接受一个参数()，是对这个symbol数据的描述
    // 即使描述一样，但是值也是不一样的
    // 它的诞生就是为了 当做对象的属性   任意一个symbol 得到的值都是不同的
    //symbol 值不可以跟其他值计算  不可以转为数字的
    //但是可以转boolean
    // 可以调用tostring 方法
    let sym1 = Symbol()
    let sym2 = Symbol()

    console.log(typeof sym1);
    console.log(sym1);
    console.log(sym2);

    // 找到相同参数的 symbol 的值  如果之前有相同参数的symbol 值，找到这个值就返回如果没有就创建一个新的symbol值
    // 使用symbol.for() 参数相同  值就相同
    Symbol.for()
    let test1 = Symbol.for("test")

    let test2 = Symbol.for("test")

    console.log(test1 == test2);

    // symbol.keyFor(symbol 值)  找到 symbol.for 创建的值的描述
    //如果使用的是Symbol 创建的是获取不到的

    console.log(Symbol.keyFor(test1));

### Set和 Map

    //类似数组，只有值value  没有键key
    //通过构造函数的方式创建一个Set实例
    //参数是一个数组（或者是类似数组只有是有iterable接口）
    // 数组， arguments , 元素集合， Set, Map , 字符串
    //默认去重
    console.log(new Set([1,2,3,4]));

    function fn() {
        console.log(new Set(arguments));
    }


    // size set 实例的大小个数
    // add clear delete  has forEach keys values entries
    // add 表示增加  如果之前没有 则增加，如果之前有，则不增加，其返回值是增加后的set实例(可以实现链式写法)
    let set1 =  new Set([1,2,3,null, NaN,true])

    //delete 删除某一个，  返回值，true/false 如果里面有这一项，就删除成功就返回true，没有此项，就删除失败false

    //clear 清空，没有返回值 undefined  没有参数

    set1.clear()

    // has 判断有没有此项， 返回值true/false
    let set2 = new Set([1,2,"哈哈",null, NaN,true])
    console.log(set2.has(NaN));

    //遍历forEach keys values entries
    set2.forEach((...item) =>{
        console.log(item);
    })

    set2.forEach((item,index,input) =>{
        //Set 实例只有value 没有key
        //item,index 当前项
        //input 当前实例
        console.log(item);

    })
    console.log(set2.keys);

    for (let key of set2.keys())
    {
        //val 是values 值
        console.log(key);
    }

    for (let [item,value] of set2.keys())
    {
        //val 是values 值
        console.log(key);
    }
    
### Set的用法

    //数组去重
    let arrry1 = [1,2,3,4,5,5,5,6]

    console.log([...new Set(arrry1)])

    console.log(Array.from(new Set(arrry1)));


    let ary = [1,3,4,5]
    let ary2 = [2,4,5]

    // 并集
    function add() {
        return [...new Set([...ary,...ary2])]
    }
    //交集
    function same() {
        return ary.filter((item)=>{
            ary2.includes(item)
        })
    }
    //差集
    function diff() {
        add(ary,ary2).filter(item =>!same(ary,ary2).includes(item));
    }

### Map的用法

    //构造函数方式创建一个Map实例
    //new Map([[key,value],[]])
    //参数是一个数组，数组每一项也是一个数组，有两项key,value
    //一个对象，属性名必须是字符串，如果你写的不是字符串也默认转为字符串
    //Map 实例的属性名可以是任何数据类型
    let arry = [1,2],o={}

    let obj = {
        name:'map',
        1:'1',
        true:'true',
        [arry]:arry,
        [o]:o
    }

    let map1 = new Map([[1,'m1'],[2,'m2'],[3,'m3'],[o,'m o'],[arry,'m arry']])

    //size 键值对的个数


    //get set has delete clear

    //get 获取 value
    //set (key,value) 如果之前有过key 一样的是修改，没有是增加，返回新的map 实例（实现链式写法）

    console.log(map1.get(1));
    map1.set(1,2)
    map1.set(false,2)

    //has 判断有没有  对应的value 有true 没有false

    map1.has(1)

    //delete 删除属性 key  返回值  true  false
     map1.delete(1)

    //clear  清空 ，没有返回值
    map1.clear()

    //forEach  keys values  entries
    let map2 = new Map([[1,'m1'],[2,'m2'],[3,'m3'],[o,'m o'],[arry,'m arry']])

    map2.forEach((value,key,input)=>{
        console.log(value); //value
        console.log(key);//key
        console.log(input);  //map实例

    })

    for (let key of map2.keys())
    {
        console.log(key)
    }

    for (let val of map2.values())
    {
        console.log(val)
    }
    for (let [key,val] of map2.entries())
    {
        console.log(key,val)
    }

    //给你一个数组变成 Map实例
    let ary = ["a","b","c","d","e","f"]
    let map3 = new Map()
    for (let [index,item] of ary.entries()){
        map3.set(index, item)
    }
    console.log(map3);
    
### Proxy 的使用


    //对对象默认操作的拦截
    //new Proxy({目标对象}，{拦截的方法})
    let obj = {name:"test",age:"10"}
    let proxy1 = new Proxy(obj, {
        get(target,key,proxy){
            //target 目标对象
            //key  属性名
            //proxy  实例
            console.log("test get")
            return target[key]
        },
        set(){
            console.log("test set")
        }
    })


    console.log(proxy1.name)
    
    
         let obj = {name:"proxy"}
         let proxy1 = new Proxy(obj, {
             get(target,propkey,value,receiver){
                 return target[propkey]
             },
             set(target,propkey,value,receiver){
                 console.log("setting");
                 target[propkey]=value
                 return true
             },
             has(target,propKey){
                 return propKey in target
             },
             apply(target,object,args){
 
             }
         })
         console.log(proxy1.name);
         proxy1.age = 10
 
         function getObj() {
             console.log(this);
             return {name:"OBJ"}
         }
 
         let proxy2 = new Proxy(getObj,{
             apply(target,object,args){
                 if (object){
                     object.fn = target
                     object.fn(...args)
                     delete object.fn
                     console.log("if")
                 }else
                 {
                     target(...args)
                     console.log("else")
                 }
             }
         })
 
         proxy2.call(obj,1,2,3)
         proxy2.call(null,1,2,3)   


### Class 的使用

        function Fn() {
            this.x = 10
        }
        Fn.prototype.getX = function(){

        }
        let f = new Fn()
        // f.constructor

        let A = class AA{
            constructor(){

                console.log(AA.name);
                this.x = 10
                return  0
            }
            getA(){
                console.log(AA.name);
            }
        }

        new AA()
        
        
             class AA{
                 constructor(name){
                     this.name = name
                 }
             }
             let a = new AA("err");
     
                 let a1 = new class {
                     constructor(name){
                         console.log(name);
                     }
                 }("类的定义")   
        
        
        //类就相当于原型  写在原型上的方法都被实例继承了，
        //假如想给当前类本身加一些方法 我们可以在方法前面加上一个关键字 static,
        //不会被实例继承，只有类本身可以使用
        //例如Array.of()

        class AA{
            constructor(){

            }
            getA(){

            }
            static getB(){

            }
        }



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


### Promise 的使用

        function loadImg(url) {
            return new Promise((resolve,reject)=>{
                let img = new Image()
                img.src=url
                img.onload = function () {
                    resolve(img)
                }
                img.onerror = function (e) {
                    reject(e)
                }
            })

        }
        loadImg("").then((img)=>{
            console.log(img);
        }).catch((e)=>{
            console.log("err");
            console.log(e);})

        function loadImg(url) {
            return new Promise((resolve,reject)=>{
                let img = new Image()
                img.src=url
                img.onload = function () {
                    resolve(img)
                }
                img.onerror = function (e) {
                    reject(e)
                }
            })

        }
        loadImg("").then((img)=>{
            console.log(img);
        }).catch((e)=>{
            console.log("err");
            console.log(e);})
        //promise.all([每一项都是Promise,如果不是默认转为Promise])
        //数组中每一项都是成功，才会走成功回调  默认将每一个项的参数    放在一个数组中传给回调函数 ，只要有一个错误，就走回调
        let pall = Promise.all([])
        pall.then((res)=>{
            console.log(res);}).catch(()=>{})
            
    // Promise.race([p1,p2,p3])
    //只要一个状态改变，当前实例的状态就跟着变
    //
### async 的使用

    async  function rpint() {
        throw new Error("err")
        return ""
    }
    rpint().then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.log(e);
    })
    
    let p = new Promise((resolve,reject)=>{
        resolve("async")
    })
    
    async  function getA() {
        await p
        //await 后面是一个promise 实例，如果不是也会默认转为 promise
        //直接让promise 执行 返回执行时的参数
    }

    getA().then(()=>{

    }).catch(()=>{

    })

### await 的使用


### esmodule的使用

    common.js
    
    sea.js require.js
    
    require  导入
    
    module.exports 


### 基本数据类型

    number string boolean  null undefined
    
    Object function
    
    Symbol (es6)

### 数组的操作方法

    操作数据的方法  (es4)
     
    pop push unshift shift slice splice  reverse sort indexOf  lastIndexof  concat  

    能改变原数组的  pop push unshift shift slice splice  reverse  sort
    
    forEach  filter(过滤) map find some every includes reduce 
    
    es6的方法：includes find
    
### 数组的操作方法的使用

    let arr = [1,2,3,4,5]
    
    arr.b = "100"
    //编程式
    for(let i = 0 ; i<arr.length;i++){
        console.log(arr[i]);
    }
    
    //声明式 ，不关心如何实现  不支持return
    arr.forEach(item =>{
        console.log(item);
    })
    
    
    for (let key in  arr){
        console.log(typeof  key);
    }
    
    // forEach  for in  for  for of 的区别
    //用for key 的时候，key会变成 字符串
    //可以打印自私属性
    
    for (let key in  arr){
        console.log(key);
    }
    
    //支持return  并且是值of数组，不能遍历对象
    for (let value of  arr){
        console.log(value);
    }
    
    // 如果想遍历一个对象呢？？
    // Object.keys() 将对象的key 作为新的数组
    
    let obj = {school:"obj",age:9}
    
    
    for (let value of Object.keys(obj)) {
        console.log(obj[value]);
    }
    
    
    //filter  它返回的都是什么呢 是否操作原数组  回调函数的返回结果
    //如果返回true,表示这一项放到新数组中
    
    
    [1,2,3,4,5].filter(function (item) {
        return item < 5
    })
    
    // map 映射 将原有的数组映射成一个新数组 [1,2,3,4]
    
    
    let arry1 = [1,2,3].map(function (item) {
        return item* 2
    })
    
    console.log(arry1.join("。"));
    
    let arr5 = [1,2,3,4,5]
    
    console.log(arr5.includes(5));//返回的是boolean
    
    // console.log(arr5.find(5)); //返回找到的那一项，不会改变数组
    
    
    let result = arr5.find(function (item,index) {
        return item.toString().indexOf(5)>-1
    })
    
    
    console.log(result);
    
    //some 找到true 就停止  返回true
    
    //every 找到false  找到false 后就停止，返回false
    
    
    //reduce
    // prev  代表的是数组的第一项 ，next 是数组的第二项
    // 第二项prev 是 undefined   next 是数组的第二项
    
    let redu= [1,2,3,4,5].reduce(function (pre,next,index,item) {
        return pre + next
    },0)
    
    console.log(redu);

### 箭头函数的使用

    //arrow fn 不具备this,arguments 
    // 自己家没有this就找上一级的this
    //如何更改this 指向
    // 1）call apply bind
    // 2) var that = this 
    // 3) 箭头函数
    
    //如何确定this 是谁 看谁调用的，.前面是谁this 就是谁
    //闭包  函数执行的一瞬间叫闭包  不销毁的作用域
    //当执行后返回的结果必须是引用数据类型，被外界变量接受  此时这个函数不会销毁
    //模块化
    
### vue的使用

    框架 vue  拥有完整的解决方案
    渐进式  渐进增强
    通过组合完成一个完成的框架  vue 全家桶  
    vuejs
    vue-router
    vuex
    axios
    
    mvc(backbone)
    mvvm
    mvvm 双向的  
    
### vue的安装

    Object.defineProperty(es5)的没有替代方案，
    
    let obj ={}
    obj.name = 1
    let temp = {}
    Object.defineProperty(obj,"name",{
        // value: 2,
        // configurable:true,
        // writable:true,
        // enumerable:false,
        get(){ //取obj的name 属性会触发
            return temp["name"]
        },
        set(val){
            temp["name"] =val
            appInput.value = obj.name
        }
    })
    for (let key in obj)
    {
        console.log(key);
    }

    appInput.addEventListener('input',function () {
        obj.name = this.value
    })
       
### vue的指令

    v-text
    v-once
    v-html
    v-model
    v-for
    
### vue的事件

    onclick 上的方法都是 windows 上的
    指令  dom元素的行间属性 vue提供了内置的指令，必须v-开头，后面的值均为变量
    v-model(表单元素)  忽略掉value checked  selected   将数据绑定到视图上，视图修改后会影响数据的变化
    v-text 取代{{}}  v-cloak   解决闪烁（块级）问题  
    [v-cloak]{display:none}  后期不是重点  后期都不采用
    -v-once  绑定一次，数据再变化也不会导致视图刷新
    -v-html  将字符串转化成html
    -v-for  循环  （数组、对象、字符串、数字）
    -v-on(@) 
    绑定给dom元素
    this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则手动写入
    
 ### axios 
  
 ai show si
    
 ### axios ajax 
       
    function ajax({url="",type='get',dataType='json'}) {
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest()
            xhr.open(type,url, true)
            xhr.responseType = dataType
            xhr.onload = function () {
                if (xhr.readyState == 200) {
                    resolve(xhr.response)
                }else {
                    reject("not found")
                }
            }
            xhr.onerror = function (err) {
                reject(err)
            }
            xhr.send()
        })
    
    }
    
    
### 判断事件源绑定事件

    xxx.addEventListener('click',fn,true)
    事件冒泡 


    <div @click="parent">parent
        <div @click="child">child
            <div @click.stop="grandson">grandson</div>
        </div>
    </div>
    @click.stop="grandson"
    // e.cancelBubble = true
    e.stopPropagation()
    @click.capture 
    @click.prevent="grandson"
    @事件.once 
    @事件.self
    e.srcElement&&e.target 判断事件源绑定事件
    
### filters 实例上可以用

    Vue.filter('my')
    
    
### computed 

    不支持异步
    
### watch  

    watch 的属性名字要和观察的人的名字一致     
    
    
### template  

    template 是vue提供给我的 没有实际意义  用来包裹元素用  v-show 不支持 template  只有v-if 使用
    
    
 ### v-if/v-show
 
 
 ### v-bind 简写  
 
    比较特殊的有class  style
    :class:={}
    
    
 ### v-bind 简写  
   
 
    比较特殊的有class  style
    :class:={}


 ### 实现单页开发的方式
 
    通过hash值的方式 （可以产生历史管理）
    浏览器自带的历史管理的方法history （history.push()）
    history.pushState('','','/dc')
    开发的时候使用hash的方式， 上线的话我们用history的方式
    
 ### directives
 
 可以操作dom了。
 
 ### localStorage的使用
 
 
 ### ref
 
     this.$data this.$watch this.$el this.$set this.$options  this.$nextTick（dom操作完成） this.$refs(只能获取一个，如果通过v-for循环得到的，那么可以取到多个)
 
 
### 全局组件
    只支持首字母大写   kebab
    Vue.component('my-handsome',{ //一个对象可以看成一个组件
    template:'<div>我的全局组件</div>',// 
    data(){   //模板数据必须是函数  return 一个实例作为组件的数据
    
    }
    
    })
### 局部组件


### 发布 emit  订阅 on { }
  
 
### 在插件上加ref 会发生什么事情
   
   
### keep-alive 缓存

   
 ###  深入理解 JavaScript 中的 class
 
 
 
 ### AJAX 的学习和使用
 
     function success(text) {
         var textarea = document.getElementById('test-response-text');
         textarea.value = text;
     }
     
     function fail(code) {
         var textarea = document.getElementById('test-response-text');
         textarea.value = 'Error code: ' + code;
     }
     
     var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
     
     request.onreadystatechange = function () { // 状态发生变化时，函数被回调
         if (request.readyState === 4) { // 成功完成
             // 判断响应结果:
             if (request.status === 200) {
                 // 成功，通过responseText拿到响应的文本:
                 return success(request.responseText);
             } else {
                 // 失败，根据响应码判断失败原因:
                 return fail(request.status);
             }
         } else {
             // HTTP请求还在继续...
         }
     }
     
     // 发送请求:
     request.open('GET', '/api/categories');
     request.send();
     
     alert('请求已发送，请等待响应...');
 
 
     function success(){
         console.log("成功");
     }
     
     function fail(){
         console.log("失败");
     }
     
     let request = new XMLHttpRequest()
     
     request.onreadystatechange = function () {
         if (request.readyState === 4){
             if (request.status === 2000){
                 return success()
             }else {
                 return fail()
             }
         }else{
     
         }
     }
     
     request.open('GET','')
     
     request.send()

 ### 浏览器的对象
 
     window
     navigator
     screen
     location
     document
        cookie httpOnly
     history 
        back()或forward ()
     
     innerHTML
     innerText
     textContent
     
     appendChild
     removeChild
     // 注意到删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置
     parentElement
     parent.children[0]
     
     
### XSS攻击       
        
       网络钓鱼(Phishing) 
       
        
### HTML表单的输入控件主要有以下几种：

    文本框，对应的<input type="text">，用于输入文本；
    
    口令框，对应的<input type="password">，用于输入口令；
    
    单选框，对应的<input type="radio">，用于选择一项；
    
    复选框，对应的<input type="checkbox">，用于选择多项；
    
    下拉框，对应的<select>，用于选择一项；
    
    隐藏文本，对应的<input type="hidden">，用户不可见，但表单提交时会把隐藏文本发送到服务器。
    
### Canvas
     
    在使用Canvas前，用canvas.getContext来测试浏览器是否支持Canvas：
    
### eventBus 总线

    let eventBus = new Vue()

### 基础路由 

    - 访问不同的路径，就可以返回不同的结果
    - 多页面（spa） 单页面应用 
    
    - single page application    

###   vue-router 介绍

    hash模式  h5 的 history.pushState 模式  
    routes
    route-view 
    this.$router.push
    this.$router.back
    this.$router.go
    
    path  redirect 
    
    
###   模块规范

    let path = require('path')
    
    webpack  必须采用commonjs 写法
    module.exports = {
        entry:'./src/main.js'
        output:{
            filename:'bundle.js'
            path:'dist'
        }
    }  
    
###   面试题

    状态码301表示永久重定向，状态码302表示临时重定向
 
    Node.js发起的HTTP请求不存在跨域限制

###   babel-core  babel-loader


###   webpack 认识 css  less sass stylus css-loader  file-loader url-loader 

test:/\.(jpg|png|igt)$/,use:'url-loader?limit=8194''


###   import page from './2.jpg'
    在js中引入图片需要import,或者写一个线上路径9
    
    
### render 函数的作用是将虚拟dom渲染成真实的dom

    render函数是将虚拟dom渲染成真实dom createElement返回的是虚拟dom


### vue文件

    需要安装 vue-loader  vue-template-compiler 
    vue-loader 解析.vue文件的
    vue-template-compiler 用来解析vue模板的
    
    
    npm install webpack webpack-dev-server
    babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader sty
    le-loader less less-loader file-loader url-loader html-webpack-plugin --save-d

### 路由元信息


###  下拉加载 /page


###  代码分割


###  发布项目


###  router的全局钩子


###  vuex中的状态


###  logger插件的使用


###  js中的事件委托或是事件代理详解

    https://www.cnblogs.com/liugang-vip/p/5616484.html
    
##  JavaScript面试题

    https://blog.csdn.net/wdlhao/article/details/79079660
    
    https://www.jianshu.com/p/8b68f4df749e
    
    http://dy.163.com/v2/article/detail/E0160M6F0518T2NO.html
    
    https://soyomo.iteye.com/blog/2394763
    
    
##  正则表达式

    regexbuddy 需要下载工具  
    
    其他在线工具

##  原型


##  Node仅仅是一个进程，而其他非node语言都是多进程的，每个进程需要耗费大约2MB内存，理论上一个8GB内存的服务器可以同时连接的最大用户数为4000个。

    Node是非阻塞的IO机制
    异步 IO特性
    Node.js适合开发I/O的业务开发，不适合大量计算的业务
    
   事件驱动是Nodejs的底层机制，有一个事件环节
    
##  Node的路由


##  Node自定义模块


##  Node  exports  


##  Node  formidable     ejs  模板引擎


##  Node  formidable     ejs  模板引擎

##  Node 
    call  和 apply  都是相同的 
       
##  Node   
    
    
## node.js的串讲复习


## node express 复习  


##  mongo 的安装和使用

    read eval print loop
    
##  NodeJS结合mongo    

    
##  结合express做一个学生管理系统


##  mongoose  


## 创建模型model和schema


## mongoose 静态方法，动态方法


## 案例
    封装一个方法，寻找有指定爱好的人
    
     简单的mongoose的查询功能，首先你要有一个数据库叫做xuesheng,然后有一个集合叫做banji1120 
    
    
    
## mongoose 的复习


## 小小学生管理系统

技术栈 node.js + express.js + ejs + mongodb + mongoose + bootstrap + jquery 


## express-session



## 选课报名系统的项目背景和需求

























    
    
