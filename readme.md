
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
    
    
    



