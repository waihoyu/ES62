

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


