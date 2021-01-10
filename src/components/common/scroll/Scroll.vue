<template>
  <div class="scroll-wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) return;
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: this.pullUpLoad,
      });
      // 监听滚动事件回调
      this.scroll.on("scroll", (pos) => {
        this.$emit("scroll", pos);
      });
      if (this.pullUpLoad) {
        // 监听上拉获取更多
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    },
    // 移动到指定位置
    scrollTo(x, y, time) {
      // 解决刚开始加载scroll对象为null时调用方法报错的问题
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    // 刷新
    refresh() {
      // 解决刚开始加载scroll对象为null时调用方法报错的问题
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    // 结束上次上拉加载
    finishPullUp() {
      // 解决刚开始加载scroll对象为null时调用方法报错的问题
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped></style>
