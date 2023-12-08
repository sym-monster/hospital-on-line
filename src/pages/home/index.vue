<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 等级子组件 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card class='item' v-for="item in 10" :key="item" />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from "./carousel/index.vue";
// 引入首页搜索组件
import Search from "./search/index.vue";
// 引入首页等级组件
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
</script>

<style scoped lang="scss">
.hospital{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item{
    width: 49%;
    margin-top: 10px;
  }
}
</style>