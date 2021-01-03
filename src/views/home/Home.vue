<template>
  <div>
    <nav-bar :styleObj="styleObj">
      <template #nav-bar-center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <tab-control :titles="titles" @itemClick="itemClick"></tab-control>
    <goods-wrapper :goodsList="showGoods"></goods-wrapper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData, getHomeGoods } from "network/home";
import HomeSwiper from "views/home/childcomponents/HomeSwiper";
import HomeRecommend from "views/home/childcomponents/HomeRecommend";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsWrapper from "components/content/goods/GoodsWrapper";

export default {
  components: { NavBar, HomeSwiper, HomeRecommend, TabControl, GoodsWrapper },
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
    },
  },
};
</script>

<style></style>
