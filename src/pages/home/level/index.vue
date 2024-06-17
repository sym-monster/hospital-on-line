<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul>
        <li :class="{ active: activeFlag == '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="level in levelArr"
          :key="level.value"
          :class="{ active: activeFlag == level.value }"
          @click="changeLevel(level.value)"
        >
          {{ level.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";
import type {
  HospitalLevelAndRegionArr,
  HospitalLevelAndRegionResponseData,
} from "@/api/home/type";

// 控制医院等级高亮的响应式数据
let activeFlag = ref<string>("");
// 组件挂载完毕
onMounted(() => {
  getLevel();
});

// 点击等级的按钮回调
const changeLevel = (level: string) => {
  // 高亮的响应式数据
  // console.log(level);
  activeFlag.value = level;
  // 触发自定义事件：将医院等级参数传给父组件
  $emit('getLevel', level);
};
let $emit = defineEmits(["getLevel"])

// 定义一个数组存储医院等级数据
let levelArr = ref<HospitalLevelAndRegionArr>([]);
// 获取医院等级的数据
const getLevel = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("HosType");
  // console.log(result);
  // 存储医院的等级的数据
  if (result.code == 200) {
    levelArr.value = result.data;
  }
};
//
</script>

<style scoped lang="scss">
h1 {
  font-size: 16px;
  color: #333;
  margin-bottom: 30px;
}
.content {
  display: flex;
  color: #999;
  .left {
    font-size: 14px;
    color: #999;
    width: 44.57px;
  }
  ul {
    display: flex;
    li {
      margin-right: 20px;
      font-size: 14px;
      color: #999;
      &.active {
        color: #55a6fe;
      }
    }
    li:hover {
      color: #55a6fe;
      cursor: pointer;
    }
  }
}
</style>