<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop />
    <!-- 展示路由组件的区域 -->
    <div class="content">
       <!-- 展示路由组件： -->
       <router-view></router-view>
    </div>
    <!-- 底部全局组件 -->
    <HospitalBottom />
  </div>
</template>
  
<script setup lang="ts">
import request from '@/utils/request';
import {onMounted} from 'vue';
onMounted(()=>{
  request.get('/hospital/1/10').then((res: any)=>{
    console.log("数据",res); 
  })
})
</script>
  
<style scoped lang="scss">
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    .content{
      margin-top: 70px;
      width: 1200px;
      min-height: 700px;
    }
  }
</style>