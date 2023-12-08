<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul>
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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
        &.active{
            color: #55a6fe
        }
    }
    li:hover{
        color: #55a6fe;
        cursor: pointer   
    }
  }
}
</style>