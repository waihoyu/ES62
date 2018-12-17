
import Vue from 'vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Collect from '../components/Collect.vue'
import Detail from '../components/Detail.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export  default  new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List},
        {path:'/add',component:Add},
        {path:'/collect',component:Collect},
        {path:'/detail',component:Detail}
    ]
})
