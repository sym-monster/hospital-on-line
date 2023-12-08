import {createRouter, createWebHistory} from "vue-router"

// 配置路由
export default createRouter ({
    // 路由模式设置
    history: createWebHistory(),
    routes:[
        {
            path:'/home',
            component:() => import("@/pages/home/index.vue")
        },
        {
            path:'/hospital',
            component:() => import("@/pages/hospital/index.vue")
        },
        {
            path:'/',
            redirect:'/home'
        }
    ],
    // 滚动行为:控制滚动条的位置
    scrollBehavior(){
        return {
            left: 0,
            top: 0
        }
    }

})