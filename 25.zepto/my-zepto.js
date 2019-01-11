(function (window) {
    var zepto = {}
    function Z(dom,seletor){
        var i ,len = dom?dom.length:0
        for (i = 0;i<len;i ++){
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }
    zepto.Z = function(dom,selector){
        return new Z(dom, selector)
    }
    zepto.init = function (seletor) {
        var slice = arrayProps.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom,seletor)
    }
    var $ =  function (selector){
        return zepto.init(selector)
    }
    window.$ = $
    $.fn= {
        css:function (key,value) {
            alert('css')
            // return
        },
        html:function (value) {
            alert('html')
            return '模拟html'
        }
    }
})()
