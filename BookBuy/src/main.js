
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  notify from './plugin/notify'
Vue.use(notify,{delay:3000})
new Vue({
    el:'#app',
    router,
    //render 函数的作用是将虚拟dom渲染成真实的dom
    render:function (createElement) {
        return createElement(App)
    }
})
