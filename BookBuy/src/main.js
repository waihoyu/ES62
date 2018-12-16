
import Vue from 'vue'
new Vue({
    //render 函数的作用是将虚拟dom渲染成真实的dom
    render:function (createElement) {
        return createElement('h1','hello')
    }
}).$mount('#app')
