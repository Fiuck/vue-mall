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
      // 监听上拉获取更多
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    // 移动到指定位置
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    // 刷新
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    // 结束上次上拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped></style>
