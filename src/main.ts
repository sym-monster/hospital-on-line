// Vue3框架提供的createAPP方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入组件APP
import App from './App.vue'
// 利用createAPP方法创建应用实例，且将应用实例挂载到挂载点上
createApp(App).mount('#app')
