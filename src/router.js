import Vue from "vue"
import VueRouter from "vue-router"

import MainPage from './components/MainPage.vue'
import AllCategory from './components/AllCategory.vue'
Vue.use(VueRouter)

const routes =[
    {path:'/',component:MainPage},
    {path:'/cate',component:AllCategory},
];

export default new VueRouter({
    routes
});
    

