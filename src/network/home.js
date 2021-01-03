import { request } from "network/request";

/**
 * 专门用于处理 Home.vue 中的所有请求
 */

/**
 * 获取首页复杂数据的方法
 */
export function getHomeMultiData() {
  return request({
    url: "/home/multidata",
  });
}

/**
 * 获取首页商品数据
 * @param {类型} type
 * @param {页码} page
 */
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page,
    },
  });
}
