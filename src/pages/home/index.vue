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
          <Card
            class="item"
            v-for="(item, index) in hasHospitalArr"
            :key="index"
            :hospitalInfo="item"
          />
          <!-- 分页器 -->
          <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
          />
        </div>
      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入组合式api函数
import { onMounted, ref } from "vue";
import { reqHospital } from "@/api/home/index";
// 引入首页轮播图组件
import Carousel from "./carousel/index.vue";
// 引入首页搜索组件
import Search from "./search/index.vue";
// 引入首页等级组件
import Level from "./level/index.vue";
import Region from "./region/index.vue";
import Card from "./card/index.vue";
import type {Content,HospitalResponseData} from "@/api/home/type"
// 分页器默认的页码
let pageNo = ref<number>(1);
// 一页展示几条数据
let pageSize = ref<number>(10);
// 存储已有的医院的数据
let hasHospitalArr = ref<Content>([]);
// 存储已有医院的总个数
let total = ref<number>(0);

// 组件挂载完毕，发一次请求
onMounted(() => {
  getHospitalInfo();
});
// 获取已有的医院的数据
const getHospitalInfo = async () => {
  // 获取医院的数据：默认获取第一页
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value);
  if (result.code == 200) {
    // 存储已有的医院的数组
    hasHospitalArr.value = result.data.content;
    // console.log(hasHospitalArr.value);
    // 存储医院的总个数
    total.value = result.data.totalElements;
  }
  // console.log(result);
};
// 分页器页码发生变化时的回调
const currentChange = async () => {
  getHospitalInfo();
};
// 分页器下拉菜单变化时的回调
const sizeChange = async () => {
  getHospitalInfo();
}
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 49%;
    margin-top: 10px;
  }
}
</style>