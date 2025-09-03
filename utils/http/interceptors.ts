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
    if(res.statusCode !== 200){
		uni.showToast({
			title:res.data.message,
			icon:"none"
		})
		return
	}
    if(!res.data.success){
		uni.showToast({
			title:res.data.message,
			icon:"none"
		})
		return
	}
    return res.data.data
}