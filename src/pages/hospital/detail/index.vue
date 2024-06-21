<template>
    <div class="hospital">
        <div class="name">
            <div class="left">{{hospitalStore.hospitalInfo.hospital?.hosname}}</div>
            <div class="right">
                <svg t="1703658953977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1504" width="16" height="16" padding-top="4px"><path d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z" fill="#999999" p-id="1505"></path><path d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z" fill="#999999" p-id="1506"></path><path d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z" fill="#999999" p-id="1507"></path></svg>
                <span>{{ hospitalStore.hospitalInfo.hospital?.param.hostypeString }}</span>
            </div>
        </div>
        <div class="route">
            <div class="left">
                    <img :src="`data:image/jpeg;base64,${hospitalStore.hospitalInfo.hospital?.logoData}`">
            </div>
            <div class="right">
                {{ hospitalStore.hospitalInfo.hospital?.route }}
            </div>
        </div>
        <div class="introduce">
            <div class="top">医院介绍</div>
            <div class="bottom">{{ hospitalStore.hospitalInfo.hospital?.intro }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitaldetail';
let hospitalStore = useDetailStore();
</script>

<style scoped lang="scss">
.hospital{
    flex-direction: column;
    display: flex;
    .name{
        display: flex;
        align-items: center;
        margin: 0 0 30px 0;
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
    .route{
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
            margin-top: 20px;
            font-size: 14px;
            color: #333;
            letter-spacing: 1px;
            line-height: 1.5;
        }
    }
    .introduce{
        .top{
            margin: 50px 0 20px 0;
        }
        .bottom{
            font-size: 12px;
            color: #666;
            letter-spacing: 1px;
            line-height: 22px;
            text-indent: 2em
        }
    }
}
</style>