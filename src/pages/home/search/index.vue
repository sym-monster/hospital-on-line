<template>
  <div class="search">
    <el-autocomplete
      clearable
      placeholder="请输入医院名称"
      class="form"
      v-model="hosname"
      :fetch-suggestions="fetchData"
      :trigger-on-focus="false"
      @select="goDetail"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>

<script setup lang="ts">
// 引入element-plus提供图标
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import {useRouter} from 'vue-router'
// 引入请求方法
import { reqHospitalInfo } from "@/api/home";
import type { HospitalInfo,content } from "@/api/home/type";
// 创建路由对象
let $router =useRouter();
//收集搜索的关键字（医院名字）
let hosname = ref<string>("");
// 顶部组件的回调
const fetchData = async(keyword:string,cb:any) => {
  // 但用户输入完关键字后，此函数执行一次
  let result:HospitalInfo = await reqHospitalInfo(keyword);
  // console.log(result.data)
  // 整理数据，变为组件需要的数据格式
  let showData = result.data.map(item=>{
    return{
      value:item.hosname, //展示医院的名字
      hoscode:item.hoscode, //存储医院的编码
    }
  })
  // 给组件提供展示的数据
  cb(showData);
};

// 点击某一个推荐项
const goDetail = (item:any)=>{
  // 点击推荐项进入医院详情页
  $router.push({path:'/hospital'})
}
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  ::v-deep .el-input__wrapper {
    width: 600px;
    margin-right: 1px;
  }
}
</style>