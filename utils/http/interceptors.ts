import {RequestConfig} from "./types";

const getToken = () => uni.getStorageSync("token") || ""

//请求拦截器
export const requestInterceptor = (config:RequestConfig) => { 
   const token = getToken()
   if (token) {
        config.header = {
            ...config.header,
            Authorization: `Bearer ${token}`
       }
   }
   return config
}

//响应拦截器
export const responseInterceptor = (res:any) => {
    if(res.statusCode !== 200) {throw new Error("请求失败",res.data.message)}
    if(!res.data.success) {throw new Error("数据异常")}
    return res.data.data
}