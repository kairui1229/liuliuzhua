import {RequestConfig} from "./types";
import { requestInterceptor, responseInterceptor} from "./interceptors";

const request = (config:RequestConfig) => { 
    const processedConfig = requestInterceptor(config)
    const url = `https://www.liuliuzhua.cn${processedConfig.url}`
    return new Promise((resolve, reject) => { 
        uni.request({
            url,
            method: processedConfig.method || 'GET',
            data: processedConfig.data,
            header: processedConfig.header,
            success: (res) => { 
                try {
                    resolve(responseInterceptor(res))
                }
                catch (err) { 
                    reject(err)
                }
            },
            fail: (err) => { 
                reject('请求失败')
            }
        })
    })
}

export const get = (url: string, data?: any)=> request({url,method:'GET', data})

export const post = (url: string, data?: any)=> request({url,method:'POST', data})