<template>
    <div class="top">
        <div class="content">
            <div class="left">
                <img src="../../assets/images/logo.png" alt="">
                <p>尚医通 预约挂号统一平台</p>
            </div>
            <div class="search">
                <div class="content">

                </div>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p class="login">登录/注册</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .top{
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 70px;
        background-color: #fff;
        display:flex;
        justify-content: center;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
        .content{
            width: 1200px;
            height: 70px;
            background-color: #fff;
            display: flex;
            // justify-content: space-between;
            .left{
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 2;
                img{
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }
                p{
                    font-size: 20px;
                    color: #55a6fe;
                }
            }
            .search{
                flex: 2;
                display: flex;
                justify-content: center;
                .content{
                    width: 283px;
                    height: 61px;
                }
            }
            .right{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                color: black;
                .help{
                    margin-right: 10px;
                }
            }
        }
    }
</style>