
var o = Object.create(Object.prototype, {
    // foo会成为所创建对象的数据属性
    foo: {
        writable:true,
        configurable:true,
        value: "hello"
    },
    // bar会成为所创建对象的访问器属性
    bar: {
        configurable: true,
        get: function() { return 10 },
        set: function(value) {
            console.log("Setting `o.bar` to", value);
        }
    }
});

console.log(o);//{foo:'hello'}

var test1 = Object.create(null) ;
console.log(test1);// {} No Properties
// 因为在bar中设置了configurable 使用set,get方法默认都是不起作用，所以bar值无法赋值或者获取
// 这里的o对象继承了 Object.prototype  Object上的原型方法
// 我们可以 对象的 __proto__属性，来获取对象原型链上的方法 如：
console.log(o.__proto__);//{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
console.log(test1.__proto__);//undefined
