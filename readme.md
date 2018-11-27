
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













