import { defineStore } from "pinia";
// pinia仓库写法：组合式API，选择式API
import { reqHospitalDetail } from "@/api/hospital";
// 引入详情数据的ts类型
import type { HospitalDetail } from "@/api/hospital/type";
const useDetailStore = defineStore('detail',{
    state:() => {
        return {
            // 医院详情的数据
            hospitalInfo:{

            }
        }
    },
        actions:{
            // 获取医院详情的方法
            async getHospital(hoscode:string){
                let result:HospitalDetail = await reqHospitalDetail(hoscode);
                // console.log(result);
                this.hospitalInfo = result.data
            }
        },
        getters: {

        }
})
// 对外暴露获取仓库的方法
export default useDetailStore