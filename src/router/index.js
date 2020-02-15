import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Car = () => import('views/car/Car')
const Cate = () => import('views/cate/Cate')
const Me = () => import('views/me/Me')
const routes=[
    {
        path:'*',
        redirect:'/home'
    },
    {
        path:'/home',
        meta: {
            title: '首页'
        },
        component:Home
    },
    {
        path: '/car',
        meta:{
            title:'购物车'
        },
        component: Car
    },
    {
        path: '/me',
        meta:{
            title:'我的'
        },
        component: Me
    },
    {
        path:'/cate',
        meta:{
            title:'分类'
        },
        component:Cate
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})
router.beforeEach((to,from,next)=>{
    document.title = to.matched[0].meta.title
    next()
})
export default router