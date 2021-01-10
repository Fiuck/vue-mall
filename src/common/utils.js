/**
 * 防抖函数
 * @param {要执行的函数} fn
 * @param {期望时间} delay
 */
export function debounce(fn, delay) {
  // 闭包
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
