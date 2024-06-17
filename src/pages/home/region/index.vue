<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div>
      <ul>
        <li :class="{ active: activeFlag == '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="region in regionArr"
          :key="region.value"
          @click="changeRegion(region.value)"
          :class="{ active: activeFlag == region.value }"
        >
          {{ region.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reqHospitalLevelAndRegion } from "@/api/home";
import { onMounted, ref } from "vue";
import {
  HospitalLevelAndRegionResponseData,
  HospitalLevelAndRegionArr,
} from "@/api/home/type";

onMounted(() => {
  getRegion();
});

// 存储地区的数组
let regionArr = ref<HospitalLevelAndRegionArr>([]);

//获取地区的数据
const getRegion = async () => {
  let result: HospitalLevelAndRegionResponseData =
    await reqHospitalLevelAndRegion("beijin");
  console.log(result);
  // 存储地区的数据
  if ((result.code = 200)) {
    regionArr.value = result.data;
  }
};
// 地区高亮的响应式数据
let activeFlag = ref<string>("");
// 点击等级的按钮回调
const changeRegion = (region: string) => {
  activeFlag.value = region;
  $emit('getRegion',region)
};
let $emit = defineEmits(['getRegion'])
</script>

<style scoped lang="scss">
.region {
  margin-top: 20px;
  .content {
    display: flex;
    font-size: 14px;
    color: #999;
    .left {
      width: 50px;
    }
    ul {
      flex-wrap: wrap;
      display: flex;
      li {
        margin-right: 20px;
        margin-bottom: 15px;
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
}
</style>