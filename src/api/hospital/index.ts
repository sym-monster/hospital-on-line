// 引入二次封装的axios
import request from '@/utils/request';
import { HospitalDetail } from './type';
// 枚举请求地址
enum API{
    HOSPITALDETAIL_URL='/hosp/hospital/',
    // 获取某一个医院科室的数组
    HOSPITALDEPARTMENT_URL='/hosp/hospital/department'
}
// 获取医院详情的接口
export const reqHospitalDetail = (hoscode:string) => request.get<any,HospitalDetail>(API.HOSPITALDETAIL_URL+hoscode)
// 获取医院科室的接口