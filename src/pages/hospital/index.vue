<template>
    <div class="hospital">
        <!-- 左侧导航区域 -->
        <div class="menu">
            <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/hospital/register" @click="changeActive('/hospital/register')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="changeActive('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="changeActive('/hospital/notice')">
          <el-icon><Clock /></el-icon>
          <span>预约须知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="changeActive('/hospital/close')">
            <el-icon><Close /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="changeActive('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
        </div>
        <!-- 右侧内容展示区域 -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useDetailStore from '@/store/modules/hospitaldetail';
// 左侧导航区域需要用到的图标
import {
  Document,
  Menu as IconMenu,
  Clock,
  Close,
  Search
} from '@element-plus/icons-vue'
import Register from '@/pages/hospital/register/index.vue'
import { useRouter, useRoute } from 'vue-router';
// 获取路由器
let $router = useRouter();
// 获取当前路由的信息
let $route = useRoute();
// 左侧菜单点击事件的回调
const changeActive = (path:string) => {
  // 跳转到对应的二级路由
  $router.push(path)
}
// 获取仓库对象
let detailStore = useDetailStore();
// 组件挂载完毕，通知pinia仓库请求获取医院详情的数据，存储在仓库中
onMounted(()=>{
  detailStore.getHospital($route.query.hoscode);
})
</script>

<style scoped lang="scss">
.hospital{
    display: flex;
    justify-content: space-between;
    .menu{
        flex:2;
    }
    .content{
        flex: 8;
    }
}
</style>