
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

