
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
