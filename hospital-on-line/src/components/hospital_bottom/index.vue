<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                <p class="record">京ICP备13018369号</p>
                <p class="phone">电话挂号010-56253825</p>
            </div>
            <div class="right">
                <p>联系我们</p>
                <p>合作伙伴</p>
                <p>用户协议</p>
                <p>隐私协议</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .bottom{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        background-color: #fafafa;
        .content{
            width: 1200px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                display: flex;
                font-size: 12px;
                color: #bbb;
                p{
                    margin-right: 10px;
                }
            }
            .right{
                display: flex;
                font-size: 12px;
                color: #666;
                p{
                    margin-left: 10px;
                }
            }
        }
    }
</style>