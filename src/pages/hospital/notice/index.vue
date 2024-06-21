<template>
    <div class="hospital">
        <div class="name">{{hospitalStore.hospitalInfo.hospital?.hosname}}</div>
        <div class="content">
            <p>为方便您早日就医康复，请您认真阅读预约挂号须知：</p>
            <div class="one">一、预约实名制：</div>
            <p>统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号（身份证、护照）、性别、手机号码、社保卡号等基本信息。</p>
            <div class="two">二、预约挂号：</div>
            <p>按照北京市卫健委统一平台要求，预约挂号规则如下：</p>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源；</ul>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>在同一自然月，同一就诊人，可以预约最多12个号源；</ul>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>在同一自然周，同一就诊人，可以预约最多8个号源；</ul>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>在同一自然季度，同一就诊人，可以预约最多24个号源。</ul>
            <div class="three">三、取消预约：</div>
            <p>已完成预约的号源，如需办理退号，至少在就诊前一工作日14:00前通过网站、微信公众号、114电话等平台预约渠道进行取消预约。</p>
            <div class="four">四、爽约处理：</div>
            <p>如预约成功后患者未能按时就诊且不办理取消预约号视为爽约，同一患者在自然年内爽约规则如下：</p>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>累计爽约3次，自3次爽约日起，90天内不允许通过114平台进行预约挂号；</ul>
            <ul class="li"><svg t="1718887917674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5459" id="mx_n_1718887917676" width="14" height="14"><path d="M512 624a112 112 0 1 0 0-224 112 112 0 0 0 0 224z" p-id="5460" fill="#666"></path></svg>累计爽约6次，自6次爽约日起，180天内不允许通过114平台进行预约挂号。</ul>
        </div>
    </div>
</template>

<script setup lang="ts">
// 引入医院详情仓库的数据
import useDetailStore from '@/store/modules/hospitaldetail';
let hospitalStore = useDetailStore();
// console.log(hospitalStore)
</script>

<style scoped lang="scss">
.hospital{
    display: flex;
    flex-direction: column;
    .name{
        width: 100%;
        font-size: 1.5em;
        text-align: center;
    }
    .content{
        p{
            margin: 20px 0;
            font-size:14px;
            color: #666;
            text-indent: 2em;
            line-height: 1.5;
        }
        svg{
            display:inline;
        }
        .li{
            text-indent: 2em;
            margin: 10px 0;
            font-size:14px;
            color: #666;
        }
        .one, .two, .three, .four{
            font-size: 14px;
            color: #333;
            margin: 20px 0;
            font-weight: bold;
        }
    }
}
</style>