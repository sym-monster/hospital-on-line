<template>
    <div class="hospital">
        <div class="name">{{hospitalStore.hospitalInfo.hospital?.hosname}}</div>
        <el-empty description="暂无信息" />
    </div>
</template>

<script setup lang="ts">
import useDetailStore from '@/store/modules/hospitaldetail';
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.hospital{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name{
        width: 100%;
        font-size: 1.5em;
        text-align: center;
    }
}
</style>