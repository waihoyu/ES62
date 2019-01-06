


var t =  setTimeout(function () {
    console.log("test")
    clearTimeout(t);
},2000)


var t1 =  setTimeout(function () {
    console.log(t)
},5000)
