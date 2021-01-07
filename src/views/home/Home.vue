<template>
  <div class="home">
    <nav-bar :styleObj="styleObj" class="nav-bar">
      <template #nav-bar-center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <scroll
      class="scroll-content"
      ref="scroll"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <div>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <tab-control :titles="titles" @itemClick="itemClick"></tab-control>
        <goods-wrapper :goodsList="showGoods"></goods-wrapper>
      </div>
    </scroll>
    <top-back @backTop="backTop" v-show="showTopBack"></top-back>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData, getHomeGoods } from "network/home";
import HomeSwiper from "views/home/childcomponents/HomeSwiper";
import HomeRecommend from "views/home/childcomponents/HomeRecommend";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsWrapper from "components/content/goods/GoodsWrapper";
import Scroll from "components/common/scroll/Scroll";
import TopBack from "components/content/topback/TopBack";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    GoodsWrapper,
    Scroll,
    TopBack,
  },
  name: "Home",
  data() {
    return {
      selected: "",
      banners: [],
      recommends: [],
      // nav bar 样式
      styleObj: {
        backgroundColor: "#ff8198",
        color: "#fff",
      },
      titles: ["流行", "新款", "精选"],
      // 三个分类的商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentIndex: "pop",
      showTopBack: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentIndex].list;
    },
  },
  created() {
    //
    this.getHomeMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * =========================处理事件监听=========================
     */
    itemClick(index) {
      let json = {
        type0: "pop",
        type1: "new",
        type2: "sell",
      };
      this.currentIndex = json["type" + index];
    },
    /**
     * 回到顶部
     */
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    // 决定topback是否显示
    contentScroll(position) {
      this.showTopBack = position.y < -200;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentIndex);

      // 上拉之后刷新容器的高度
      this.$refs.scroll.refresh();
    },

    /**
     * =========================请求接口数据=========================
     */
    // 获取首页复杂数据
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 获取首页商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });

      // 结束上拉
      this.$refs.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.scroll-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow-y: hidden;
}
</style>
