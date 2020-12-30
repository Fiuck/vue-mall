import {request} from 'network/request'

/**
 * 专门用于处理 Home.vue 中的所有请求
 */

 /**
  * 获取首页复杂数据的方法
  */
export function getHomeMultiData(){
    return request({
        url: '/home/multidata'
    })
}