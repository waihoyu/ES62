function Promise(fn) {
    var state = 'pending',
        value = null,
        callbacks = [];
    this.then = function (onFulfilled) {
        if (state == 'pending') {
            callbacks.push(onFulfilled);
            return this;
        }
        onFulfilled(value + "T");
        return this;
    };

    function resolve(newValue) {
        value = newValue;
        setTimeout(function () {
            state = 'fulfilled';
            callbacks.forEach(function (callback) {
                callback(value + 'w');
            });
        }, 0);
    }
    fn(resolve);
}
//例1
var test = function getUserId() {
    return new Promise2(function(resolve) {
        //异步请求
        resolve("test")
    })
}

var test2 = test().then(function(id) {
    //一些处理
    console.log(id)
}).then(function(id) {
    //一些处理
    console.log(id)
})

setTimeout(function () {
    test2.then(function(id) {
        //一些处理
        console.log(id)
    }).then(function(id) {
        //一些处理
        console.log(id)
    })
},2000)
