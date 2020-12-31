<template>
  <div>
    <nav-bar>
      <template #nav-bar-center>
        <span>首页</span>
      </template>
    </nav-bar>
    <!-- <home-swiper></home-swiper> -->
    <swiper v-model="selected">
      <swiper-item
        v-for="(item, index) in banners"
        :key="item.link"
        :name="index"
      >
        {{ item.title }}
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: { NavBar, Swiper, SwiperItem },
  name: "Home",
  data() {
    return {
      selected: "",
      banners: null,
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.banner.list;
    });
  },
};
</script>

<style></style>
