// 统一管理首页模块的接口
import request from '@/utils/request'
import type { HospitalResponseData, HospitalLevelAndRegionResponseData, HospitalInfo } from './type'

// 通过枚举管理首页模块接口地址
enum API {
    // 获取已有的医院的数据接口的地址
    HOSPITAL_URL = '/hosp/hospital/',
    // 获取医院等级与地区接口
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/',
    // 根据医院名字获取数组
    HOSPITALINFO_URL= '/hosp/hospital/findByHosname/'
}

// 获取医院的数据
export const reqHospital = (page: number, limit: number, hostype='', districtCode='') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)
// 获取医院的等级或者地区的数据
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any, HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + dictCode)
// 根据关键字获取医院的数组进行展示
export const reqHospitalInfo = (hosname:string) => request.get<any, HospitalInfo>(API.HOSPITALINFO_URL+ hosname)