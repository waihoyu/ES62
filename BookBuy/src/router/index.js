
import Vue from 'vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export  default  new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List}
    ]
})
