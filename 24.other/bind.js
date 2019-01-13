

Function.prototype.bind1 = function(context){
    //保存this，也就是调用bind的那个函数
    var self = this;
    var args = [].slice.call(arguments,1);
    console.log(args)
    return function(){
        //将第一次的参数与此次传入的参数合并，调用self函数
        console.log(arguments)
        // return self.apply(context,args.concat([].slice.call(arguments)));
        return self.apply(context,([].slice.call(arguments)));
    }
}


var test =  function (name) {
    console.log('test',this)
}

var result = test.bind1({x:100},2,3)

result(1)
