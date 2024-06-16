// 对于axios函数库进行二次封装
// 目的：利用axios请求、响应拦截器功能
import axios from 'axios';

// 创建axios实例：可以设置基础路径、超超时的时间的设置
const request = axios.create({
    baseURL:'/api', //请求的基础路径的设置
    timeout:10000  //超时的时间的设置，超出5s请求失败
});

// 请求拦截器
request.interceptors.request.use((config)=>{
    // config：请求拦截器回调注入的对象（配置对象），header属性
    return config;
})
// 响应拦截器
request.interceptors.response.use((response)=>{
    // 响应拦截器成功的回调
    return response.data;
},(error)=>{
    // 处理http网络错误
    return Promise.reject(new Error(error.message))
})

// 暴露axios
export default request;