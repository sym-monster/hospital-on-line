<template>
    <div class="register">
        <div class="hospital">
            <div class="name">
                <div class="left">{{hospitalStore.hospitalInfo.hospital?.hosname}}</div>
                <div class="right">
                    <svg t="1703658953977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1504" width="16" height="16" padding-top="4px"><path d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z" fill="#999999" p-id="1505"></path><path d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z" fill="#999999" p-id="1506"></path><path d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z" fill="#999999" p-id="1507"></path></svg>
                    <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
                </div>
            </div>
            <div class="rule">
                <div class="left">
                    <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.hospital?.logoData}`">
                </div>
                <div class="right">
                    <div class="register">
                        <span >挂号规则</span>
                        <div class="time">
                            <ul class="li">预约周期：<span>{{ hospitalStore.hospitalInfo.bookingRule?.cycle}} 天</span></ul>
                            <ul class="li">放号时间：<span>{{ hospitalStore.hospitalInfo.bookingRule?.releaseTime}}</span></ul>
                            <ul class="li">停挂时间：<span>{{ hospitalStore.hospitalInfo.bookingRule?.stopTime}}</span></ul>
                            <ul class="li">退号时间：<span>就诊前一工作日{{ hospitalStore.hospitalInfo.bookingRule?.quitTime}}前取消</span></ul>
                        </div>
                    </div>
                    <div class="reserve">
                        <span>医院预约规则</span>
                        <div class="reserveInfo" v-for="(item,index) in hospitalStore.hospitalInfo.bookingRule?.rule" :key="index">{{ item }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="department">

        </div>
    </div>
</template>

<script setup lang="ts">
// 引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitaldetail';
let hospitalStore = useDetailStore();
console.log(hospitalStore)
</script>

<style scoped lang="scss">
.hospital{
    .name{
        display: flex;
        align-items: center;
        margin: 20px 0 30px 0;
        .left{
            font-size: 20px;
            color: #333;
            font-weight: 700;
            margin-right: 15px;
            letter-spacing: 1px;
        }
        .right{
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #999;
        }
    }
    .rule{
        color:#333;
        display: flex;
        .left{
            margin: 0 10px 0 0 ;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%
            }
        }
        .right{
            // display: flex;
            .register{
                // display: flex;
                .time{
                    margin-top:10px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    .li{
                        margin: 5px 0;
                        display: flex;
                        align-items: center;
                        flex: calc(33.33%);
                        font-size: 12px;
                        color: #999;
                        span{
                            color: #333;
                        }
                    }
                }
            }
            .reserve{
                span{
                    display: inline-block;
                    margin: 10px 0;
                }
                margin-top:10px;
                .reserveInfo{
                    margin: 5px 0;
                    font-size:12px;
                    color:#999;
                }
            }
        }
    }
}
</style>