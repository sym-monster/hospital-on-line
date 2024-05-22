<template>
  <div>
    <el-card class="box-card" shadow="hover">
        <div class="content">
          <div class="left">
            <div class="wrapper">
              <div class="hospital_name">
                北京大学国际医院
              </div>
              <div class="bottom_container">
                <div class="level">
                  <svg t="1703658953977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1504" width="16" height="16" padding-top="4px"><path d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z" fill="#999999" p-id="1505"></path><path d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z" fill="#999999" p-id="1506"></path><path d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z" fill="#999999" p-id="1507"></path></svg>
                  <span>二级乙等</span>
                </div>
                <div class="open_time">
                  <svg t="1703659157983" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3448" width="14" height="14"><path d="M512 64c-256 0-460.8 208-460.8 460.8s208 460.8 460.8 460.8 460.8-208 460.8-460.8S768 64 512 64zM512 940.8c-227.2 0-412.8-185.6-412.8-412.8s185.6-412.8 412.8-412.8 412.8 185.6 412.8 412.8S742.4 940.8 512 940.8z" p-id="3449"></path><path d="M809.6 544l-278.4 0 0-281.6c0-12.8-9.6-22.4-22.4-22.4-12.8 0-22.4 9.6-22.4 22.4l0 307.2c0 12.8 9.6 22.4 22.4 22.4 0 0 3.2 0 3.2 0l297.6 0c12.8 0 22.4-9.6 22.4-22.4C832 553.6 822.4 544 809.6 544z" p-id="3450"></path></svg>
                  <span>每天7:00放号</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <img src="../../../assets/images/hospital_picture/h1.jpeg" alt="">
          </div>
        </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
::v-deep .el-card__body{
  display: flex;
  height: 100px;
  padding: 0;
  align-items: center;
}
.content{
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  .left{
    margin-left: 20px;
    width: 60%;
    .wrapper{
      margin-top: 10px;
      height: 70px;
      .hospital_name{
        font-size: 18px;
      }
      .bottom_container{
        color: #999;
        font-size: 14px;
        margin-top: 22px;
        display: flex;
        justify-content: space-between;
        .level{
          display: flex;
          height: 20px;
          line-height: 14px;
          svg{
            margin-right: 5px;
          }
        }
        .open_time{
          display: flex;
          svg{
            margin-right: 5px;
          }
        }
      }
    }
   
  }
  .right{
    width: 100px;
    height: 100%;
    img{
      width: 80px;
      height: 80px;
    }
  }
}
</style>