var http = require('http')
var url = require('url')

function Promise1(fn) {
    var value = null,
        callbacks = [];  //callbacks为数组，因为可能同时有很多个回调

    this.then = function (onFulfilled) {

        callbacks.push(onFulfilled);
        return this;
    };

    function resolve(value) {

        setTimeout(function() {
            console.log(callbacks);
            callbacks.forEach(function (callback) {
                callback(value);
            });
        }, 0)
    }

    fn(resolve);
}


//例1
function getUserId() {
    return new Promise1(function(resolve) {
        //异步请求
        resolve("test")
    })
}

var test = getUserId().then(function(id) {
    //一些处理
    console.log("then")
}).then(function(id) {
    //一些处理
    console.log("then2")
})


setTimeout(function () {
    test.then(function(id) {
        //一些处理
        console.log("then3")
    })
},2000)
