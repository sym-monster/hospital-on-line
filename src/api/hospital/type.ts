// 定义详情模块数据的ts类型
export interface ResponseData{
    code:number,
    message:string,
    ok:Boolean
}
// 代表医院详情的数据
export interface HospitalDetail{
    'bookingRule':{
        "cycle":number,
        "releaseTime":string,
        "stopTime":string,
        "quitDay":number,
        "quitTime":string,
        "rule":string[]
    },
    'hospital':{
        "id":string,
        "createTime":string,
        "updateTime":string,
        "isDeleted":number,
        "param":{
            "hostypeString":string,
            "fullAddress":string
        },
        "hoscode":string,
        "hosname":string,
        "hostype":string,
        "provinceCode":string,
        "cityCode":string,
        "districtCode":string,
        "address":string,
        "logoData":string,
        "intro":null,
        "route":string,
        "status":number,
        "bookingRule":string
    }
}

// 医院详情返回的数据
export interface HospitalDetail extends ResponseData{
    data:HospitalDetail
}