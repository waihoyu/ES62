import modal from './notify.vue'
let notify = {}

notify.install = function (Vue,options={delay:3000}) {
    Vue.prototype.$notify = function (message,opt={}) {
        if (notify.el) return
        options = {...options,...opt} //用自己调用插件时传递过来的属性，覆盖掉默认设置好的
        let V = Vue.extend(modal) //返回一个构造函数的子类
        let vm = new V
        vm.value = message
        let oDiv = document.createElement('div')
        vm.$mount(oDiv)
        notify.el = vm.$el
        document.body.appendChild(vm.$el)
        setTimeout(()=>{
            document.body.removeChild(vm.$el)
            notify.el = null
        },options.delay)
    }
}

//导出notify插件对象
export  default  notify
